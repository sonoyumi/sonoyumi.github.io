"""Синхронизация сайта с GitHub: публичные репозитории, число тестов из README, последний пуш.

Пишет data/github.js (window.GH = {...}). Файл перезаписывается только если данные изменились,
поэтому GitHub Action не делает пустых коммитов. Запуск: python tools/sync_github.py
Токен необязателен (GITHUB_TOKEN из окружения поднимает лимит запросов).
"""
import base64
import json
import os
import re
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

USER = "sonoyumi"
SKIP = {USER, f"{USER}.github.io"}              # профиль и сам сайт — не проекты
OUT = Path(__file__).resolve().parent.parent / "data" / "github.js"
TESTS_RE = re.compile(r"\b(\d{1,4})\s+(?:automated\s+)?tests\b", re.I)


def api(path):
    req = urllib.request.Request(f"https://api.github.com{path}", headers={"Accept": "application/vnd.github+json", "User-Agent": "sonoyumi-site-sync"})
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        req.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.load(r)


def readme_tests(repo):
    """Число тестов из README: первое «N tests» / «N automated tests»; None, если не найдено."""
    try:
        text = base64.b64decode(api(f"/repos/{USER}/{repo}/readme")["content"]).decode("utf-8", "ignore")
    except Exception:
        return None
    m = TESTS_RE.search(text)
    return int(m.group(1)) if m else None


def main():
    repos = {}
    for r in api(f"/users/{USER}/repos?per_page=100&type=owner&sort=pushed"):
        if r["fork"] or r["private"] or r["archived"] or r["name"] in SKIP:
            continue
        repos[r["name"]] = {
            "description": r["description"] or "",
            "topics": r.get("topics", []),
            "language": r["language"],
            "stars": r["stargazers_count"],
            "pushed": r["pushed_at"],
            "tests": readme_tests(r["name"]),
        }

    last = None
    try:
        for e in api(f"/users/{USER}/events/public?per_page=30"):
            name = e["repo"]["name"].split("/")[-1]
            if e["type"] == "PushEvent" and name not in SKIP:
                last = {"repo": name, "at": e["created_at"]}
                break
    except Exception:
        pass

    data = {"repos": repos, "lastPush": last}
    old = None
    if OUT.exists():
        m = re.search(r"window\.GH = (\{.*\});", OUT.read_text(encoding="utf-8"), re.S)
        if m:
            old = json.loads(m.group(1))
            old.pop("synced", None)
    if old == data:
        print("без изменений")
        return 0
    data["synced"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    OUT.write_text("// Сгенерировано tools/sync_github.py — не править руками\nwindow.GH = "
                   + json.dumps(data, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print(f"обновлено: {len(repos)} репозиториев, последний пуш: {last}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

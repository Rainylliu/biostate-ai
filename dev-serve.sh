#!/usr/bin/env bash
# ============================================================
# dev-serve.sh  —  本地开发 + Git 自动同步
# 用法: bash dev-serve.sh
# 功能:
#   1. npm install (如果需要)
#   2. 启动 Next.js dev server (localhost:3000)
#   3. 后台每 30s 自动 git pull & git push
# ============================================================
set -e

BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "🚀  Branch: $BRANCH"

# ---- 安装依赖 ----
if [ ! -d node_modules ]; then
  echo "📦  Installing dependencies..."
  npm install
fi

# ---- Git 自动同步 (后台) ----
git_sync() {
  while true; do
    sleep 30
    # pull
    git pull origin "$BRANCH" --rebase --autostash 2>/dev/null && \
      echo "[git-sync] pulled at $(date +%H:%M:%S)" || true
    # stage + commit + push (if there are changes)
    if [ -n "$(git status --porcelain)" ]; then
      git add -A
      git commit -m "auto-sync: $(date +%Y-%m-%d_%H:%M:%S)" 2>/dev/null || true
      git push -u origin "$BRANCH" 2>/dev/null && \
        echo "[git-sync] pushed at $(date +%H:%M:%S)" || true
    fi
  done
}
git_sync &
GIT_SYNC_PID=$!

# 退出时清理后台进程
cleanup() {
  echo ""
  echo "🛑  Stopping git-sync (PID $GIT_SYNC_PID)..."
  kill $GIT_SYNC_PID 2>/dev/null || true
  exit 0
}
trap cleanup SIGINT SIGTERM EXIT

# ---- 启动 Next.js Dev Server ----
echo "🌐  Starting Next.js dev server on http://localhost:3000 ..."
npx next dev -p 3000

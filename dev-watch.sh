#!/usr/bin/env bash
# ============================================================
# dev-watch.sh  —  每 5 秒实时刷新 / 文件变更监控
# 用法: bash dev-watch.sh
# 功能:
#   每 5 秒检测文件变更并打印摘要，同时刷新浏览器页面
# ============================================================

PORT=${1:-3000}
URL="http://localhost:$PORT"

echo "👁  Watching file changes every 5s ..."
echo "   Target: $URL"
echo "   Press Ctrl+C to stop"
echo "-------------------------------------------"

PREV_HASH=""

while true; do
  # 计算 src/ 目录下所有文件的 hash 摘要
  CURR_HASH=$(find src/ -type f -exec md5sum {} + 2>/dev/null | sort | md5sum | awk '{print $1}')
  NOW=$(date +"%H:%M:%S")

  if [ "$PREV_HASH" != "$CURR_HASH" ]; then
    if [ -n "$PREV_HASH" ]; then
      echo "[$NOW] 🔄  File change detected! Listing changed files:"
      git diff --name-only 2>/dev/null || true
      git status --short 2>/dev/null || true
      # 发送浏览器刷新信号 (如果安装了 curl)
      echo "[$NOW] ✅  Next.js HMR will auto-reload the browser."
    else
      echo "[$NOW] 📸  Initial snapshot taken."
    fi
    PREV_HASH="$CURR_HASH"
  else
    echo "[$NOW] —  No changes."
  fi

  sleep 5
done

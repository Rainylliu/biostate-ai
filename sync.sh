#!/bin/bash
# Auto-sync script: fetches and merges remote changes every 5 seconds
# Usage: bash sync.sh

BRANCH="claude/migrate-wordpress-site-G0LQ9"

echo "Auto-sync started. Pulling from origin/$BRANCH every 5s..."
echo "Press Ctrl+C to stop."
echo ""

while true; do
  git fetch origin "$BRANCH" 2>/dev/null
  OUTPUT=$(git merge origin/"$BRANCH" 2>&1)
  if [ "$OUTPUT" != "Already up to date." ] && [ -n "$OUTPUT" ]; then
    echo "[$(date '+%H:%M:%S')] $OUTPUT"
  fi
  sleep 5
done

#!/usr/bin/env bash
# BookShop Mastery Engine — ishga tushirish. Server ixtiyoriy: ishlamasa app offline rejimda ochiladi.
cd "$(dirname "$0")" || exit 1
PORT="${BS_PORT:-8765}"
export BS_PORT="$PORT"
echo "App:      http://127.0.0.1:$PORT/app/index.html"
echo "Darslik:  http://127.0.0.1:$PORT/index.html"
echo "(Serverni ishlatmasdan ham ochish mumkin: app/index.html ni brauzerda oching — offline rejim.)"
exec python3 app/server.py

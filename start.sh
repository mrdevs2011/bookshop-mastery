#!/usr/bin/env bash
# BookShop Mastery Engine — ishga tushirish
cd "$(dirname "$0")" || exit 1
PORT="${BS_PORT:-8765}"

port_busy() {
  ss -ltn 2>/dev/null | grep -q ":$1 " || \
  (echo >/dev/tcp/127.0.0.1/"$1") >/dev/null 2>&1
}

if port_busy "$PORT"; then
  echo "Ogohlantirish: port $PORT band. Boshqa port qidirilmoqda..."
  for try in 8766 8767 8768 8770 8780 8888 9000 9876; do
    if ! port_busy "$try"; then
      PORT=$try
      break
    fi
  done
  if port_busy "$PORT"; then
    echo "Xato: bo'sh port topilmadi. BS_PORT=xxxx ./start.sh deb urinib ko'ring."
    exit 1
  fi
fi

export BS_PORT="$PORT"
echo "App:      http://127.0.0.1:$PORT/app/index.html"
echo "Darslik:  http://127.0.0.1:$PORT/index.html"
echo "(Offline: app/index.html ni brauzerda to'g'ridan ochish mumkin.)"
exec python3 app/server.py

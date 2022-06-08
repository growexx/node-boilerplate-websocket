#!/bin/sh
set -xv
sleep 15
result=$(curl -sL -w "%{http_code}\\n" "http://localhost:3006/cca_websocket" -o /dev/null)

if [ "$result" = "200" ]; then
    exit 0
else
    exit 1
fi

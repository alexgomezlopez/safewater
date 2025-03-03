#!/bin/bash
echo "Iniciando el backend..."
pm2 stop safewater-backend || true
pm2 start /home/ubuntu/safewater/backend/server.js --name safewater-backend --env production --update-env
pm2 save
pm2 restart safewater-backend

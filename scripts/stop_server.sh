#!/bin/bash
echo "Deteniendo el backend..."
pm2 stop safewater-backend || true

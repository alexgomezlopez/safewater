#!/bin/bash
set -e  # Detiene la ejecución si ocurre un error

# Actualizar repositorios y paquetes
sudo apt update -y
sudo apt upgrade -y

# Instalar Node.js si no está instalado
if ! command -v node &> /dev/null; then
    echo "Instalando Node.js y npm..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
fi

# Asegurar que PM2 está instalado
if ! command -v pm2 &> /dev/null; then
    echo "Instalando PM2..."
    sudo npm install -g pm2
fi

# Instalar dependencias del backend
cd /home/ubuntu/safewater/backend
npm install

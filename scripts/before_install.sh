#!/bin/bash

# Actualiza el sistema
sudo apt update -y

# Elimina paquetes problemáticos
sudo apt remove -y nodejs npm || true

# Instala Node.js y npm correctamente
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
sudo apt install -y nodejs

# Verifica instalación de Node.js y npm
node -v
npm -v

# Navega al backend y ejecuta npm install
cd /home/ubuntu/safewater/backend || exit 1
npm install

#!/bin/bash
set -e  # Esto hará que el script se detenga si hay un error

# Actualizar repositorios
sudo apt update -y

# Verificar si Node.js ya está instalado y en qué versión
if ! command -v node &> /dev/null
then
    echo "Instalando Node.js y npm..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
else
    echo "Node.js ya está instalado"
fi

# Eliminar conflictos con npm si los hay
sudo apt-get remove -y npm || true
sudo apt-get install -y npm

# Instalar dependencias del backend
cd /home/ubuntu/safewater/backend
npm install

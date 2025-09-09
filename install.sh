#!/bin/bash
# Script de instalação inicial para VPS Linux (Ubuntu/Debian)

echo "Bem-vindo ao Instalador do Sistema PDV Multilojas"
echo "Configurando ambiente..."

# 1. Instala dependências básicas
apt update
apt install -y nodejs npm postgresql nginx git

# 2. Clona o projeto
git clone https://github.com/heglay/pdv.git /opt/pdv

cd /opt/pdv

# 3. Solicita domínios
read -p "Digite o domínio principal (ex: meusistema.com): " DOMAIN
read -p "Digite o subdomínio do painel admin (ex: admin.meusistema.com): " ADMIN_SUBDOMAIN
read -p "Digite o subdomínio da landpage (ex: loja.meusistema.com): " LANDPAGE_SUBDOMAIN

# 4. Gera arquivos de configuração .env
cat <<EOF > .env
DOMAIN=$DOMAIN
ADMIN_SUBDOMAIN=$ADMIN_SUBDOMAIN
LANDPAGE_SUBDOMAIN=$LANDPAGE_SUBDOMAIN
DATABASE_URL=postgres://usuario:senha@localhost:5432/pdv
EOF

# 5. Instala dependências do projeto
npm install

# 6. Executa migrations (exemplo usando Prisma)
npm run migrate

# 7. Configura Nginx com subdomínios
# (Gera arquivos de configuração automaticamente...)

# 8. Inicia o sistema
npm run start

echo "Instalação concluída! Acesse o sistema pelo painel administrativo: https://$ADMIN_SUBDOMAIN"

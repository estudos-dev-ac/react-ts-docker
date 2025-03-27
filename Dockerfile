# Usa a imagem oficial do Node.js como base
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json primeiro para instalar as dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do projeto para dentro do container
COPY . .

# Expõe a porta do Vite (5173)
EXPOSE 5173

# Comando para iniciar o Vite
CMD ["npm", "run", "dev"]
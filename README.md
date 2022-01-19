# Space Flight News

## Descrição

Aplicação Fullstack (Vue + Node.js) baseada em dados do projeto [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation)

## Tecnologias

#### **Linguagens**

- Javascript

#### **Frontend:**

- Vite
- Vue 3
- Axios
- Bulma
- Font Awesome
- Sass

#### **Backend**

- Node.js
- Express
- Mongoose
- MongoDB
- Swagger (JSDoc + UI Express)
- Mocha + Chai
- Node Cron

## Instruções

### Cliente

```sh
# Copiar o arquivo .env.template (root da pasta client) como .env e definir a mesma porta do server
VITE_BACKEND_SERVER_HOST=3000

# Rodar os seguintes comando
npm install     # Instalar dependências
npm run dev     # Rodar servidor de desenvolvimento
```

### Servidor

```sh
# Copiar o arquivo .env.template (root da pasta server) como .env e definir porta a ser utilizada e o string do banco em mongo
PORT=3000
MONGO_DB_STRING=

# Rodar os seguintes comando
npm run populate  # Rodar script para popular database
npm install       # Instalar dependências
npm run dev       # Rodar servidor de desenvolvimento
```

## Scripts

### Cliente

```sh
npm run dev       # Iniciar servidor de desenvolvimento
npm run build     # Compilar projeto para produção
npm run preview   # Iniciar preview de build de produção
```

### Servidor

```sh
npm run dev       # Iniciar servidor de desenvolvimento
npm run test      # Rodar testes unitários de api
npm run populate  # Popular banco de dados
```

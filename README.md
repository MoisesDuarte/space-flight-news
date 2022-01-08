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
- Sass

#### **Backend**

- Node.js
- Express
- Mongoose
- MongoDB
- Swagger

## Instruções

### Cliente

#### Instalar dependências

```
npm install
```

#### Rodar servidor de desenvolvimento

```
npm run dev
```

### Servidor

#### Copiar o arquivo .env.template (root da pasta server) como .env e definir porta a ser utilizada

```
PORT=3000
```

#### Rodar script para popular database

```
npm run populate
```

#### Instalar dependências

```
npm install
```

#### Rodar servidor de desenvolvimento

```
npm run dev
```

## Scripts

### Cliente

| Comando         | Descrição                            |
| --------------- | ------------------------------------ |
| npm run dev     | Iniciar servidor de desenvolvimento  |
| npm run build   | Compilar projeto para produção       |
| npm run preview | Iniciar preview de build de produção |

### Servidor

| Comando          | Descrição                           |
| ---------------- | ----------------------------------- |
| npm run dev      | Iniciar servidor de desenvolvimento |
| npm run test     | Rodar testes unitários de api       |
| npm run populate | Popular banco de dados              |

> This is a challenge by [Coodesh](https://coodesh.com)

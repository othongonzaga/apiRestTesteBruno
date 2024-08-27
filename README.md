# API REST TESTE DE BRUNO

Esta é uma API REST simples construída com Node.js, Fastify, Prisma, e Postgres, e containerizada usando Docker.

### Pré-requisitos

- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) instalados.
- [Docker](https://www.docker.com/products/docker-desktop) instaldo.

### Passos para Executar

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/othongonzaga/apiRestTesteBruno.git


2. **Criar banco de dados PostgreSQL no Docker**

    Nessa etapa vai seguir o passo a passo do [site](https://www.commandprompt.com/education/how-to-create-a-postgresql-database-in-docker/)

3. **Configuração do Ambiente**

    Crie um arquivo .env na raiz do projeto com os valores das variaveis de ambiente

4. **Executar migrate e rodar api**

    ```bash
    npx prisma migrate dev
    npm run dev
#Projeto Blog/Rede Social Backend

Este é o backend do projeto de **blog/rede social**, desenvolvido com **Node.js** e **Express**, utilizando **Sequelize** como ORM para integração com banco de dados MySQL. A aplicação oferece endpoints RESTful para gerenciamento de usuários, publicações, categorias, autenticação com JWT, upload de arquivos e um sistema de **chat em tempo real** com **Socket.IO**.

---

##Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript no servidor.
- **Express** — Framework web minimalista e flexível.
- **Sequelize** — ORM para MySQL.
- **Socket.IO** — Comunicação em tempo real via WebSockets.
- **JWT (jsonwebtoken)** — Autenticação baseada em token.
- **Joi** — Validação de dados.
- **Multer** — Upload de arquivos.
- **Helmet** — Segurança em headers HTTP.
- **CORS** — Compartilhamento de recursos entre origens.
- **bcrypt** — Criptografia de senhas.

---

## Como Executar

### 1. Instale as dependências
npm install

### 2. Inicialize o sequelize
npx sequelize-cli init

### 3. Crie o banco de dados
npx sequelize-cli db:create

### 4. Execute as migrations
npx sequelize-cli db:migrate

### 5. Execute os seeds
npx sequelize-cli db:seed:all

### 6. Configure o .env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=projeto_blog
JWT_SECRET=sua_chave_secreta

### 6. Verificação e formatação do código (opcional)
npm run lint
npm run format

### 7. Rode o projeto
npm run dev

> O frontend da aplicação está disponível em:  
> [https://github.com/SidiJr/projeto-blog](https://github.com/SidiJr/projeto-blog)

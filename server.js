require("dotenv").config(); // Carrega as variáveis de ambiente

const app = require("./src/app.js"); // Importa o app

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor rodando na porta ${PORT}`);
});

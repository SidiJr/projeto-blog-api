import "dotenv/config"; // importa e já executa o dotenv.config()

import app from "./src/app.js"; // importe o app

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

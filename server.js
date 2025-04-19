import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";

const app = express();
const PORT = 3000;

// Models
import "./models/CategoriasModel.js";
import "./models/AutoresModel.js";
import "./models/PostsModel.js";

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
import categoriasRotas from "./routes/CategoriasRoutes.js";

app.use("/categorias", categoriasRotas);

async function start() {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco de dados com sucesso.");

    await sequelize.sync();
    console.log("Modelos sincronizados.");

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
  }
}

start();

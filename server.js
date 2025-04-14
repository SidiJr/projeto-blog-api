import express from "express";
import sequelize from "./config/db.js";

// Models
import "./models/CategoriasModel.js";
import "./models/AutoresModel.js";
import "./models/PostsModel.js";

// Rotas
import categoriasRotas from "./routes/CategoriasRoutes.js";

const app = express();
const PORT = 3000;

// Rotas
app.use("/categorias", categoriasRotas);

async function start() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado ao banco de dados com sucesso.");

    await sequelize.sync();
    console.log("✅ Modelos sincronizados.");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erro ao iniciar a aplicação:", error);
  }
}

start();

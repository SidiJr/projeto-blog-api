import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import path from "path";

const app = express();
const PORT = 3000;

// Models
import "./models/CategoriasModel.js";
import "./models/AutoresModel.js";
import "./models/PostsModel.js";

// Middleware
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.resolve('uploads')));

// Rotas
import categoriasRotas from "./routes/CategoriasRoutes.js";
import autoresRotas from "./routes/AutoresRoutes.js";
import postsRotas from "./routes/PostsRoutes.js";

app.use("/categorias", categoriasRotas);
app.use("/autores", autoresRotas);
app.use("/posts", postsRotas);

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

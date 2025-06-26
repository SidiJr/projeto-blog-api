const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const errorMiddleware = require("./middlewares/errorMiddleware.js");
const socketIo = require("socket.io");
const authRoutes = require("./routes/authRoutes");
const categoriasRouter = require("./routes/categoriasRoutes.js");
const postsRouter = require("./routes/postsRoutes.js");
const usuariosRouter = require("./routes/usuariosRoutes.js");
const mensagensRouter = require("./routes/mensagensRoutes.js");
// const comentariosRouter = require("./routes/comentariosRoutes.js");
// const postlikesRouter = require("./routes/postlikesRoutes.js");

const app = express();

app.use(cors());
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(express.json());

// Upload de imagens
app.use("/uploads", express.static("uploads"));

// ROTAS
app.use("/", authRoutes);
app.use("/categorias", categoriasRouter);
app.use("/posts", postsRouter);
app.use("/usuarios", usuariosRouter);
app.use("/mensagens", mensagensRouter);
// app.use("/comentarios", comentariosRouter);
// app.use("/postlikes", postlikesRouter);

app.use(errorMiddleware);

module.exports = app;
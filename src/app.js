const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const errorMiddleware = require("./middlewares/errorMiddleware.js");
// const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// ROTAS
// app.use("/users", userRoutes);

app.use(errorMiddleware);

module.exports = app;

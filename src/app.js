import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import errorMiddleware from "./middlewares/errorMiddleware.js";
// import userRoutes from "./routes/userRoutes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(json());

//ROTAS
// app.use("/users", userRoutes);

app.use(errorMiddleware);

export default app;

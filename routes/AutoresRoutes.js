import express from "express";
import autoresController from "../controllers/AutoresController.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.get("/", autoresController.listarAutores);
router.get("/:id", autoresController.buscarAutorPorId);
router.post("/", upload.none(), autoresController.criarAutor);
router.put("/:id", upload.none(), autoresController.atualizarAutor);
router.delete("/:id", autoresController.deletarAutor);

export default router;

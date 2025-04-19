import express from "express";
import autoresController from "../controllers/AutoresController.js";

const router = express.Router();

router.get("/", autoresController.listarAutores);
router.get("/:id", autoresController.buscarAutorPorId);
router.post("/", autoresController.criarAutor);
router.put("/:id", autoresController.atualizarAutor);
router.delete("/:id", autoresController.deletarAutor);

export default router;

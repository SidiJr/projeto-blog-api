import express from "express";
import categoriasController from "../controllers/CategoriasController.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.get("/", categoriasController.listarCategorias);
router.get("/:id", categoriasController.buscarCategoriaPorId);
router.post("/", upload.none(), categoriasController.criarCategoria);
router.put("/:id", upload.none(), categoriasController.atualizarCategoria);
router.delete("/:id", categoriasController.deletarCategoria);

export default router;

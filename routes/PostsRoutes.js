import express from "express";
import postsController from "../controllers/PostsController.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.get("/", postsController.listarPosts);
router.get("/:id", postsController.buscarPostPorId);
router.post("/", upload.single("imagem"), postsController.criarPost);
router.put("/:id", upload.single("imagem"), postsController.atualizarPost);
router.delete("/:id", postsController.deletarPost);

export default router;

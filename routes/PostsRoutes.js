import express from 'express';
import postsController from '../controllers/PostsController.js';

const router = express.Router();

router.get('/', postsController.listarPosts);
router.get('/:id', postsController.buscarPostPorId);
router.post('/', postsController.criarPost);
router.put('/:id', postsController.atualizarPost);
router.delete('/:id', postsController.deletarPost);

export default router;

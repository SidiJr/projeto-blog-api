import express from 'express';
import categoriasController from '../controllers/CategoriasController.js';

const router = express.Router();

router.get('/', categoriasController.listarCategorias);
router.get('/:id', categoriasController.buscarCategoriaPorId);
router.post('/', categoriasController.criarCategoria);
router.put('/:id', categoriasController.atualizarCategoria);
router.delete('/:id', categoriasController.deletarCategoria);

export default router;

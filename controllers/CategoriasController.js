import Categorias from '../models/CategoriasModel.js';

const categoriasController = {
  listarCategorias: async (req, res) => {
    try {
      const categorias = await Categorias.findAll();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar categorias" });
    }
  },

  buscarCategoriaPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const categoria = await Categorias.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ erro: "Categoria não encontrada" });
      }
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar categoria" });
    }
  },

  criarCategoria: async (req, res) => {
    const { nome, descricao } = req.body;
    try {
      const novaCategoria = await Categorias.create({ nome, descricao });
      res.status(201).json(novaCategoria);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar categoria" });
    }
  },

  atualizarCategoria: async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
      const categoria = await Categorias.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ erro: "Categoria não encontrada" });
      }

      categoria.nome = nome;
      categoria.descricao = descricao;
      await categoria.save();

      res.json(categoria);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao atualizar categoria" });
    }
  },

  deletarCategoria: async (req, res) => {
    const { id } = req.params;

    try {
      const categoria = await Categorias.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ erro: "Categoria não encontrada" });
      }

      await categoria.destroy();
      res.json({ mensagem: "Categoria deletada com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao deletar categoria" });
    }
  },
};

export default categoriasController;

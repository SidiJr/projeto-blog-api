import Categorias from "../models/CategoriasModel.js";

const categoriasController = {
  listarCategorias: async (req, res) => {
    try {
      const categorias = await Categorias.findAll({
        order: [["id", "DESC"]],
      });
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar categorias." });
    }
  },

  buscarCategoriaPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const categoria = await Categorias.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ message: "Categoria não encontrada." });
      }
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar categoria." });
    }
  },

  criarCategoria: async (req, res) => {
    const { nome, descricao } = req.body;
    try {
      const novaCategoria = await Categorias.create({ nome, descricao });
      res.status(201).json({
        message: "Categoria criada com sucesso.",
        data: novaCategoria,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar categoria." });
    }
  },

  atualizarCategoria: async (req, res) => {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
      const categoria = await Categorias.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ message: "Categoria não encontrada." });
      }

      categoria.nome = nome;
      categoria.descricao = descricao;
      await categoria.save();

      res.status(201).json({
        message: "Categoria atualizada com sucesso.",
        data: categoria,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar categoria." });
    }
  },

  deletarCategoria: async (req, res) => {
    const { id } = req.params;

    try {
      const categoria = await Categorias.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ message: "Categoria não encontrada." });
      }

      await categoria.destroy();
      res.json({ message: "Categoria deletada com sucesso.", data: {} });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar categoria." });
    }
  },
};

export default categoriasController;

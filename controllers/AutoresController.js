import Autores from '../models/AutoresModel.js';

const autoresController = {
  listarAutores: async (req, res) => {
    try {
      const autores = await Autores.findAll();
      res.json(autores);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar autores" });
    }
  },

  buscarAutorPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const autor = await Autores.findByPk(id);
      if (!autor) {
        return res.status(404).json({ erro: "Autor não encontrado" });
      }
      res.json(autor);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar autor" });
    }
  },

  criarAutor: async (req, res) => {
    const { nome, biografia } = req.body;
    try {
      const novoAutor = await Autores.create({ nome, biografia });
      res.status(201).json(novoAutor);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar autor" });
    }
  },

  atualizarAutor: async (req, res) => {
    const { id } = req.params;
    const { nome, biografia } = req.body;

    try {
      const autor = await Autores.findByPk(id);
      if (!autor) {
        return res.status(404).json({ erro: "Autor não encontrado" });
      }

      autor.nome = nome;
      autor.biografia = biografia;
      await autor.save();

      res.json(autor);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao atualizar autor" });
    }
  },

  deletarAutor: async (req, res) => {
    const { id } = req.params;

    try {
      const autor = await Autores.findByPk(id);
      if (!autor) {
        return res.status(404).json({ erro: "Autor não encontrado" });
      }

      await autor.destroy();
      res.json({ mensagem: "Autor deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao deletar autor" });
    }
  },
};

export default autoresController;

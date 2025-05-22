import Autores from "../models/AutoresModel.js";

const autoresController = {
  listarAutores: async (req, res) => {
    try {
      const autores = await Autores.findAll({
        order: [['id', 'DESC']],
      });
      res.json(autores);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar autores." });
    }
  },

  buscarAutorPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const autor = await Autores.findByPk(id);
      if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado." });
      }
      res.json(autor);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar autor." });
    }
  },

  criarAutor: async (req, res) => {

    const { nome, email } = req.body;
    try {
      const novoAutor = await Autores.create({ nome, email });
      res.status(201).json({
        message: "Autor criado com sucesso.",
        data: novoAutor,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar autor." });
    }
  },

  atualizarAutor: async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    try {
      const autor = await Autores.findByPk(id);
      if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado." });
      }

      autor.nome = nome;
      autor.email = email;
      await autor.save();

      res.status(201).json({
        message: "Autor atualizado com sucesso.",
        data: autor,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar autor." });
    }
  },

  deletarAutor: async (req, res) => {
    const { id } = req.params;

    try {
      const autor = await Autores.findByPk(id);
      if (!autor) {
        return res.status(404).json({ messsage: "Autor não encontrado." });
      }

      await autor.destroy();
      res.json({ message: "Autor deletado com sucesso.", data: {} });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar autor." });
    }
  },
};

export default autoresController;

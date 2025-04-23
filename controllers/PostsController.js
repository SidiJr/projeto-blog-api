import AutoresModel from "../models/AutoresModel.js";
import CategoriasModel from "../models/CategoriasModel.js";
import Posts from "../models/PostsModel.js";

const postsController = {
  listarPosts: async (req, res) => {
    try {
      const { id } = req.query;

      const where = {};
      if (id) {
        where.categoria_id = id;
      }

      const posts = await Posts.findAll({
        where,
        order: [["id", "DESC"]],
      });

      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao buscar posts." });
    }
  },

  buscarPostPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Posts.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: "Post não encontrado." });
      }
      const categoria = await CategoriasModel.findByPk(
        post.dataValues.categoria_id
      );
      const autor = await AutoresModel.findByPk(post.dataValues.autor_id);
      const response = {
        ...post.dataValues,
        categorias: categoria ? categoria.id : null,
        autores: autor ? autor.id : null,
      };

      res.json(response);
    } catch (error) {
      console.error("Erro ao buscar post:", error);
      res.status(500).json({ message: "Erro ao buscar post." });
    }
  },

  criarPost: async (req, res) => {
    const { titulo, conteudo, categorias, autores, data_criacao } = req.body;
    const categoria_id = categorias;
    const autor_id = autores;
    const imagem = req.file ? req.file.filename : null;

    try {
      const novoPost = await Posts.create({
        titulo,
        conteudo,
        imagem,
        autor_id,
        categoria_id,
        data_criacao,
      });

      res.status(201).json({
        message: "Post criado com sucesso.",
        data: novoPost,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao criar post." });
    }
  },

  atualizarPost: async (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo, autores, categorias, data_criacao } = req.body;
    const categoria_id = categorias;
    const autor_id = autores;
    const imagem = req.file ? req.file.filename : null;

    try {
      const post = await Posts.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: "Post não encontrado." });
      }

      post.titulo = titulo;
      post.conteudo = conteudo;
      post.autor_id = autor_id;
      post.categoria_id = categoria_id;
      post.data_criacao = data_criacao;
      if (imagem) post.imagem = imagem;
      await post.save();

      res.status(201).json({
        message: "Post atualizado com sucesso.",
        data: post,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar post." });
    }
  },

  deletarPost: async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Posts.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: "Post não encontrado." });
      }

      await post.destroy();
      res.json({ message: "Post deletado com sucesso.", data: {} });
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar post." });
    }
  },
};

export default postsController;

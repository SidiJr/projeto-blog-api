import Posts from "../models/PostsModel.js";

const postsController = {
  listarPosts: async (req, res) => {
    try {
      const posts = await Posts.findAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar posts" });
    }
  },

  buscarPostPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Posts.findByPk(id);
      if (!post) {
        return res.status(404).json({ erro: "Post não encontrado" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar post" });
    }
  },

  criarPost: async (req, res) => {
    const { titulo, conteudo, autorId, categoriaId } = req.body;
    try {
      const novoPost = await Posts.create({
        titulo,
        conteudo,
        autorId,
        categoriaId,
      });
      res.status(201).json(novoPost);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao criar post" });
    }
  },

  atualizarPost: async (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo, autorId, categoriaId } = req.body;

    try {
      const post = await Posts.findByPk(id);
      if (!post) {
        return res.status(404).json({ erro: "Post não encontrado" });
      }

      post.titulo = titulo;
      post.conteudo = conteudo;
      post.autorId = autorId;
      post.categoriaId = categoriaId;
      await post.save();

      res.json(post);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao atualizar post" });
    }
  },

  deletarPost: async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Posts.findByPk(id);
      if (!post) {
        return res.status(404).json({ erro: "Post não encontrado" });
      }

      await post.destroy();
      res.json({ mensagem: "Post deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ erro: "Erro ao deletar post" });
    }
  },
};

export default postsController;

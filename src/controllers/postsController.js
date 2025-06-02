const postsService = require("../services/postsService");

const postsController = {
  async index(req, res, next) {
    // Listar posts
    try {
      const posts = await postsService.index();
      res.status(200).json({
        data: posts,
        status: 200,
        message: "Posts carregados com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    // Mostrar post específico
    try {
      const post = await postsService.show(req.params.id);
      res.status(200).json({
        data: post,
        status: 200,
        message: "Post encontrado com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    // Criar novo post
    try {
      const data = {
        ...req.body,
        imagem: req.file ? req.file.filename : null,
      };

      const novoPost = await postsService.store(data);

      res.status(201).json({
        data: novoPost,
        status: 201,
        message: "Post criado com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    // Atualizar post existente
    try {
      const data = {
        ...req.body,
        imagem: req.file ? req.file.filename : undefined,
      };

      const postAtualizado = await postsService.update(req.params.id, data);
      res.status(200).json({
        data: postAtualizado,
        status: 200,
        message: "Post atualizado com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    // Deletar post
    try {
      await postsService.destroy(req.params.id);
      res.status(200).json({
        data: null,
        status: 200,
        message: "Post deletado com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = postsController;

const { Post, Usuario } = require("../app/models");
const AppError = require("../utils/AppError");
const fs = require("fs");
const path = require("path");

const postsService = {
  async index() {
    const posts = await Post.findAll({
      include: {
        model: Usuario,
        as: "usuario",
        attributes: ["nome"],
      },
    });

    if (!posts) {
      throw new AppError("Nenhum post encontrado.", 404);
    }

    return posts;
  },

  async show(id) {
    const post = await Post.findByPk(id);

    if (!post) {
      throw new AppError("Nenhum post encontrado.", 404);
    }

    return post;
  },

  async store(data) {
    return await Post.create(data);
  },

  async update(id, data) {
    const post = await Post.findByPk(id);

    if (!post) {
      throw new AppError("Post não encontrado.", 404);
    }

    if (data.imagem && post.imagem) {
      const imagemPath = path.resolve(
        __dirname,
        "..",
        "..",
        "uploads",
        post.imagem
      );

      if (fs.existsSync(imagemPath)) {
        fs.unlinkSync(imagemPath);
      }
    }

    return await post.update(data);
  },

  async destroy(id) {
    const post = await Post.findByPk(id);

    if (!post) {
      throw new AppError("Post não encontrado.", 404);
    }

    await post.destroy();
  },
};

module.exports = postsService;

const { Op } = require("sequelize");
const { Categoria } = require("../app/models");
const AppError = require("../utils/AppError");

const categoriasService = {
  async index(searchParams) {
    const where = {};

    if (searchParams) {
      where.nome = {
        [Op.like]: `%${searchParams}%`,
      };
    }

    const categorias = await Categoria.findAll({ where });

    if (!categorias) {
      throw new AppError("Nenhuma categoria encontrada.", 404);
    }

    return categorias;
  },

  async show(id) {
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      throw new AppError("Nenhuma categoria encontrada.", 404);
    }

    return categoria;
  },

  async store(data) {
    return await Categoria.create(data);
  },

  async update(id, data) {
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      throw new AppError("Categoria não encontrada.", 404);
    }

    return await categoria.update(data);
  },

  async destroy(id) {
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      throw new AppError("Categoria não encontrada.", 404);
    }

    await categoria.destroy();
  },
};

module.exports = categoriasService;

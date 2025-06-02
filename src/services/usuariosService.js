const { Op } = require("sequelize");
const { Usuario } = require("../app/models");
const AppError = require("../utils/AppError");

const usuariosService = {
  async index() {
    const usuarios = await Usuario.findAll();

    if (!usuarios) {
      throw new AppError("Nenhum usuário encontrada.", 404);
    }

    return usuarios;
  },

  async show(id) {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      throw new AppError("Nenhum usuário encontrada.", 404);
    }

    return usuario;
  },

  async store(data) {
    const emailExiste = await Usuario.findOne({
      where: { email: data.email },
    });
    if (emailExiste) {
      throw new AppError("O email já está em uso.", 400);
    }

    return await Usuario.create(data);
  },

  async update(id, data) {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    const emailExiste = await Usuario.findOne({
      where: {
        email: data.email,
        id: { [Op.ne]: id },
      },
    });

    if (emailExiste) {
      throw new AppError("O email já está em uso.", 400);
    }

    return await usuario.update(data);
  },

  async destroy(id) {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      throw new AppError("Usuario não encontrado.", 404);
    }

    await usuario.destroy();
  },
};

module.exports = usuariosService;

const usuariosService = require("../services/usuariosService");

const usuariosController = {
  async index(req, res, next) {
    // Listar usuários
    try {
      const usuarios = await usuariosService.index();
      res.status(200).json({
        data: usuarios,
        status: 200,
        message: "Usuários carregados com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    // Mostrar usuário específico
    try {
      const usuario = await usuariosService.show(req.params.id);

      res.status(200).json({
        data: usuario,
        status: 200,
        message: "Usuário encontrado com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    // Criar novo usuário
    try {
      const novoUsuario = await usuariosService.store(req.body);
      res.status(201).json({
        data: novoUsuario,
        status: 201,
        message: "Usuário criado com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    // Atualizar usuário existente
    try {
      const usuarioAtualizada = await usuariosService.update(
        req.params.id,
        req.body
      );
      res.status(200).json({
        data: usuarioAtualizada,
        status: 200,
        message: "Usuário atualizado com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    // Deletar usuário
    try {
      await usuariosService.destroy(req.params.id);
      res.status(200).json({
        data: null,
        status: 200,
        message: "Usuário deletada com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = usuariosController;

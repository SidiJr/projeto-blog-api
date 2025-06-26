const mensagensService = require("../services/mensagensService");

const mensagensController = {
  async index(req, res, next) {
    try {
      const mensagens = await mensagensService.index();
      res.status(200).json({
        data: mensagens,
        status: 200,
        message: "Mensagens carregadas com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    try {
      const usuarioId = req.body.usuario_id;
      const { conteudo } = req.body;

      const novaMensagem = await mensagensService.store({
        conteudo,
        usuario_id: usuarioId,
      });

      res.status(201).json({
        data: novaMensagem,
        status: 201,
        message: "Mensagem criada com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = mensagensController;

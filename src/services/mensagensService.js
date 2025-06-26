const { Mensagem, Usuario } = require("../app/models");
const AppError = require("../utils/AppError");

const mensagensService = {
  async index(usuario_id = null) {
    const where = {};

    if (usuario_id) {
      where.usuario_id = usuario_id;
    }

    const mensagens = await Mensagem.findAll({
      where,
      include: [
        {
          model: Usuario,
          as: "usuario",
          attributes: ["id", "nome", "sobrenome", "email"],
        },
      ],
      order: [["createdAt", "ASC"]],
    });

    if (!mensagens || mensagens.length === 0) {
      throw new AppError("Nenhuma mensagem encontrada.", 404);
    }

    return mensagens;
  },

  async store(data) {
    if (!data.conteudo || !data.usuario_id) {
      throw new AppError("Conteúdo e usuário são obrigatórios.", 400);
    }

    const mensagem = await Mensagem.create(data);
    return mensagem;
  },
};

module.exports = mensagensService;

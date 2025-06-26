const mensagensService = require("./services/mensagensService");
const { Mensagem, Usuario } = require("./app/models");

function socketHandler(io) {
  io.on("connection", (socket) => {
    console.log("Novo usuário conectado");

    socket.on("enviarMensagem", async (dados) => {
      try {
        // Salva a mensagem
        const novaMensagem = await mensagensService.store({
          conteudo: dados.conteudo,
          usuario_id: dados.usuario_id,
        });

        // Busca a mensagem recém-criada
        const mensagemCompleta = await Mensagem.findByPk(novaMensagem.id, {
          include: [
            {
              model: Usuario,
              as: "usuario",
              attributes: ["id", "nome", "sobrenome", "email"],
            },
          ],
        });

        // Emite a mensagem
        io.emit("mensagemRecebida", mensagemCompleta);
      } catch (error) {
        console.error("Erro ao enviar mensagem via socket:", error);
        socket.emit("erroMensagem", {
          message: error.message || "Erro interno ao enviar mensagem.",
        });
      }
    });

    socket.on("disconnect", () => {
      console.log("Usuário desconectado");
    });
  });
}

module.exports = socketHandler;

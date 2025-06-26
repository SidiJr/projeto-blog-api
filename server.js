require("dotenv").config(); // Carrega as variáveis de ambiente
const http = require("http");
const socketIo = require("socket.io");
const app = require("./src/app.js"); // Importa o app
const socketHandler = require("./src/socket");
const PORT = process.env.PORT || 3000;

// Cria o servidor HTTP com o Express
const server = http.createServer(app);

// Conecta o Socket.IO ao servidor HTTP
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Inicializa o socket
socketHandler(io);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor rodando na porta ${PORT}`);
});

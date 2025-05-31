// Middleware para captura de erros em toda a aplicação
function errorMiddleware(err, req, res, next) {
  // Exibe o erro completo no console para depuração
  // eslint-disable-next-line no-console
  console.error("[ERRO]:", err.stack);

  // Define o código de status da resposta: usa o informado no erro ou 500 (erro interno) como padrão
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : "Erro interno no servidor";

  // Retorna uma resposta JSON padronizada com a mensagem de erro e o status
  res.status(statusCode).json({
    data: null,
    status: statusCode,
    message,
  });
}

module.exports = errorMiddleware;

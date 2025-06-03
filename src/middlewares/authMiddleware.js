const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

const JWT_SECRET = process.env.JWT_SECRET || "chaveSecreta";

// eslint-disable-next-line consistent-return
function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(
      new AppError("Você precisa estar logado para acessar este recurso.", 401)
    );
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(
        new AppError(
          "Sua sessão expirou ou é inválida. Faça login novamente.",
          403
        )
      );
    }

    req.usuario = decoded;
    return next();
  });
}

module.exports = autenticarToken;

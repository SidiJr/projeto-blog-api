const { Usuario } = require("../app/models");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

const JWT_SECRET = process.env.JWT_SECRET || "chaveSecreta";
const JWT_EXPIRES_IN = "1h";
async function login(email, senha) {
  const usuario = await Usuario.findOne({ where: { email } });

  if (!usuario) {
    throw new AppError("E-mail ou senha incorretos", 401);
  }

  const senhaValida = await usuario.validarSenha(senha);

  if (!senhaValida) {
    throw new AppError("E-mail ou senha incorretos", 401);
  }

  const token = jwt.sign(
    { id: usuario.id, email: usuario.email, role: usuario.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return {
    data: {
      id: usuario.id,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      role: usuario.role,
    },
    token,
    message: "Login realizado com sucesso!",
    status: 200,
  };
}

module.exports = { login };

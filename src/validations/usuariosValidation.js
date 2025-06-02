const Joi = require("joi");

const usuarioSchema = Joi.object({
  nome: Joi.string().required().messages({
    "any.required": "O campo 'nome' é obrigatório.",
    "string.base": "O campo 'nome' deve ser um texto.",
    "string.empty": "O campo 'nome' não pode ser vazio.",
  }),
  sobrenome: Joi.string().required().messages({
    "any.required": "O campo 'sobrenome' é obrigatório.",
    "string.base": "O campo 'sobrenome' deve ser um texto.",
    "string.empty": "O campo 'sobrenome' não pode ser vazio.",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "O campo 'email' é obrigatório.",
    "string.base": "O campo 'email' deve ser um texto.",
    "string.empty": "O campo 'email' não pode ser vazio.",
    "string.email": "O campo 'email' deve ser um endereço de e-mail válido.",
  }),
  senha: Joi.string().min(6).required().messages({
    "any.required": "O campo 'senha' é obrigatório.",
    "string.base": "O campo 'senha' deve ser um texto.",
    "string.empty": "O campo 'senha' não pode ser vazio.",
    "string.min": "O campo 'senha' deve ter pelo menos {#limit} caracteres.",
  }),
  role: Joi.string().valid("user", "admin").default("user"),
});

module.exports = usuarioSchema;

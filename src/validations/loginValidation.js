const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "O campo 'email' é obrigatório.",
    "string.email": "O campo 'email' deve ser um e-mail válido.",
    "string.empty": "O campo 'email' não pode ser vazio.",
  }),
  senha: Joi.string().required().messages({
    "any.required": "O campo 'senha' é obrigatório.",
    "string.empty": "O campo 'senha' não pode ser vazio.",
  }),
});

module.exports = loginSchema;

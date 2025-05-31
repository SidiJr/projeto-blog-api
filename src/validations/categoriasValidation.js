const Joi = require("joi");

const categoriaSchema = Joi.object({
  nome: Joi.string().required().messages({
    "any.required": "O campo 'nome' é obrigatório.",
    "string.base": "O campo 'nome' deve ser um texto.",
    "string.empty": "O campo 'nome' não pode ser vazio.",
  }),

  descricao: Joi.string().allow("").optional().messages({
    "string.base": "O campo 'descrição' deve ser um texto.",
  }),
});

module.exports = categoriaSchema;

const Joi = require("joi");

const createPostSchema = Joi.object({
  titulo: Joi.string().required().messages({
    "any.required": "O campo 'título' é obrigatório.",
    "string.base": "O campo 'título' deve ser um texto.",
    "string.empty": "O campo 'título' não pode ser vazio.",
  }),

  conteudo: Joi.string().required().messages({
    "any.required": "O campo 'conteúdo' é obrigatório.",
    "string.base": "O campo 'conteúdo' deve ser um texto.",
    "string.empty": "O campo 'conteúdo' não pode ser vazio.",
  }),

  data_criacao: Joi.date().required().messages({
    "any.required": "O campo 'data_criacao' é obrigatório.",
    "date.base": "O campo 'data_criacao' deve ser uma data válida.",
  }),

  categoria_id: Joi.required().messages({
    "any.required": "O campo 'categoria_id' é obrigatório.",
  }),

  usuario_id: Joi.required().messages({
    "any.required": "O campo 'usuario_id' é obrigatório.",
  }),
});

const updatePostSchema = Joi.object({
  titulo: Joi.string().messages({
    "string.base": "O campo 'título' deve ser um texto.",
  }),

  conteudo: Joi.string().messages({
    "string.base": "O campo 'conteúdo' deve ser um texto.",
  }),

  data_criacao: Joi.date().messages({
    "date.base": "O campo 'data_criacao' deve ser uma data válida.",
  }),

  categoria_id: Joi.any(),

  usuario_id: Joi.any(),

  imagem: Joi.any().optional(),
}).min(1);

module.exports = { createPostSchema, updatePostSchema };

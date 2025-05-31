"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categorias",
      [
        {
          nome: "Tecnologia",
          descricao: "Artigos relacionados a inovações tecnológicas.",
        },
        {
          nome: "Esportes",
          descricao: "Notícias e análises sobre esportes variados.",
        },
        {
          nome: "Saúde",
          descricao: "Conteúdo sobre saúde, bem-estar e medicina.",
        },
        {
          nome: "Entretenimento",
          descricao: "Tudo sobre filmes, música, séries e cultura pop.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categorias", null, {});
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          titulo: "Primeiro post",
          conteudo: "Conteúdo do primeiro post",
          data_criacao: new Date("2025-05-01"),
          imagem: "imagem1.jpg",
          categoria_id: 1,
          usuario_id: 1,
        },
        {
          titulo: "Segundo post",
          conteudo: "Conteúdo do segundo post",
          data_criacao: new Date("2025-05-10"),
          imagem: "imagem2.jpg",
          categoria_id: 2,
          usuario_id: 2,
        },
        {
          titulo: "Terceiro post",
          conteudo: "Conteúdo do terceiro post",
          data_criacao: new Date("2025-05-15"),
          imagem: null,
          categoria_id: 3,
          usuario_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};

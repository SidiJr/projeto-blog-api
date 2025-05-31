"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comentarios",
      [
        {
          post_id: 1,
          usuario_id: 2,
          conteudo: "Muito bom o post! Parabéns.",
          data_criacao: new Date("2025-05-25T14:30:00"),
        },
        {
          post_id: 2,
          usuario_id: 1,
          conteudo: "Gostei das informações, me ajudou bastante.",
          data_criacao: new Date("2025-05-26T09:15:00"),
        },
        {
          post_id: 3,
          usuario_id: 3,
          conteudo: "Ótimo conteúdo, continue assim!",
          data_criacao: new Date("2025-05-27T18:45:00"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comentarios", null, {});
  },
};

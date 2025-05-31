"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nome: "João",
          sobrenome: "Silva",
          email: "joao.silva@example.com",
          senha_hash: "hash1",
        },
        {
          nome: "Maria",
          sobrenome: "Oliveira",
          email: "maria.oliveira@example.com",
          senha_hash: "hash2",
        },
        {
          nome: "Carlos",
          sobrenome: "Pereira",
          email: "carlos.pereira@example.com",
          senha_hash: "hash3",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};

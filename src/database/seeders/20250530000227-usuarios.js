"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nome: "Sednei",
          sobrenome: "Rossetti Junior",
          email: "sednei.jr@example.com",
          senha: "hash1hash1",
          role: "admin",
        },
        {
          nome: "João",
          sobrenome: "Silva",
          email: "joao.silva@example.com",
          senha: "hash2hash2",
          role: "user",
        },
        {
          nome: "Maria",
          sobrenome: "Oliveira",
          email: "maria.oliveira@example.com",
          senha: "hash3hash3",
          role: "user",
        },
        {
          nome: "Carlos",
          sobrenome: "Pereira",
          email: "carlos.pereira@example.com",
          senha: "hash4hash4",
          role: "user",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuarios", null, {});
  },
};

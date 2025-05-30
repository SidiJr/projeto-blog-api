"use strict";

/** @type {import('sequelize-cli').Migration} */
export // eslint-disable-next-line no-unused-vars
async function up(queryInterface, Sequelize) {
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
}
export // eslint-disable-next-line no-unused-vars
async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("usuarios", null, {});
}

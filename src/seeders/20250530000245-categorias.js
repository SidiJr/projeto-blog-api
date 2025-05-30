"use strict";

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-unused-vars
export async function up(queryInterface, Sequelize) {
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
}
// eslint-disable-next-line no-unused-vars
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("categorias", null, {});
}

"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Posts", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    titulo: {
      type: Sequelize.STRING,
    },
    conteudo: {
      type: Sequelize.TEXT,
    },
    data_criacao: {
      type: Sequelize.DATE,
    },
    imagem: {
      type: Sequelize.STRING,
    },
    categoria_id: {
      type: Sequelize.INTEGER,
    },
    usuario_id: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}
// eslint-disable-next-line no-unused-vars
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Posts");
}

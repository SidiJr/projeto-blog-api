"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "postlikes",
      [
        {
          post_id: 1,
          usuario_id: 2,
          data_liked: new Date("2025-05-20T10:00:00"),
        },
        {
          post_id: 2,
          usuario_id: 1,
          data_liked: new Date("2025-05-21T15:30:00"),
        },
        {
          post_id: 3,
          usuario_id: 3,
          data_liked: new Date("2025-05-22T12:45:00"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("postlikes", null, {});
  },
};

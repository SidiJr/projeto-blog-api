import { Sequelize } from "sequelize";

const sequelize = new Sequelize("projetoblog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;

import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CategoriasModel = sequelize.define(
  "Categoria",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "categorias",
    timestamps: false,
  }
);

export default CategoriasModel;

"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Categoria.hasMany(models.Post, {
        foreignKey: "categoria_id",
        as: "posts",
      });
    }
  }
  Categoria.init(
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
      sequelize,
      modelName: "Categoria",
      tableName: "categorias",
      timestamps: true,
    }
  );
  return Categoria;
};

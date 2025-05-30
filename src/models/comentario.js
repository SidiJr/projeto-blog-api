"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comentario.belongsTo(models.Post, {
        foreignKey: "post_id",
        as: "post",
      });

      Comentario.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "autor",
      });
    }
  }
  Comentario.init(
    {
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      conteudo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_criacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Comentario",
      tableName: "comentarios",
      timestamps: true,
    }
  );
  return Comentario;
};

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Mensagem extends Model {
    static associate(models) {
      Mensagem.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuario",
      });
    }
  }

  Mensagem.init(
    {
      conteudo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Mensagem",
      tableName: "mensagens",
      timestamps: true,
    }
  );

  return Mensagem;
};

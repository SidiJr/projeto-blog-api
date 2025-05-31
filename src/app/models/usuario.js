"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.Post, {
        foreignKey: "usuario_id",
        as: "posts",
        onDelete: "CASCADE",
      });

      Usuario.hasMany(models.Comentario, {
        foreignKey: "usuario_id",
        as: "comentarios",
        onDelete: "CASCADE",
      });

      Usuario.hasMany(models.PostLike, {
        foreignKey: "usuario_id",
        as: "likes",
        onDelete: "CASCADE",
      });
    }
  }
  Usuario.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      senha_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuarios",
      timestamps: true,
    }
  );
  return Usuario;
};

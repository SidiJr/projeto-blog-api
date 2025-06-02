"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

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
    async validarSenha(senha) {
      return bcrypt.compare(senha, this.senha);
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
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
        allowNull: false,
        defaultValue: "user",
      },
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuarios",
      timestamps: true,
      hooks: {
        async beforeCreate(usuario) {
          if (usuario.senha) {
            usuario.senha = await bcrypt.hash(usuario.senha, 10);
          }
        },
        async beforeUpdate(usuario) {
          if (usuario.changed("senha")) {
            usuario.senha = await bcrypt.hash(usuario.senha, 10);
          }
        },
      },
    }
  );
  return Usuario;
};

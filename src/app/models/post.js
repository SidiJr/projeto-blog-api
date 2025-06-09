"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Categoria, {
        foreignKey: "categoria_id",
        as: "categoria",
        onDelete: "SET NULL",
      });

      Post.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuario",
        onDelete: "CASCADE",
      });

      Post.hasMany(models.Comentario, {
        foreignKey: "post_id",
        as: "comentarios",
        onDelete: "CASCADE",
      });

      Post.hasMany(models.PostLike, {
        foreignKey: "post_id",
        as: "likes",
        onDelete: "CASCADE",
      });
    }
  }
  Post.init(
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      conteudo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      data_criacao: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      imagem: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
      timestamps: true,
    }
  );
  return Post;
};

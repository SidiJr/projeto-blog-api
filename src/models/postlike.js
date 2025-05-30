"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class PostLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostLike.belongsTo(models.Post, {
        foreignKey: "post_id",
        as: "post",
        onDelete: "CASCADE",
      });

      PostLike.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuario",
        onDelete: "CASCADE",
      });
    }
  }
  PostLike.init(
    {
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      data_liked: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "PostLike",
      tableName: "postlikes",
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ["post_id", "usuario_id"],
        },
      ],
    }
  );
  return PostLike;
};

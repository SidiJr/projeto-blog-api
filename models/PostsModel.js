import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import CategoriasModel from './CategoriasModel.js';
import AutoresModel from './AutoresModel.js';

const PostsModel = sequelize.define(
  'Post',
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
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'posts',
    timestamps: false,
  }
);

// Relacionamentos
PostsModel.belongsTo(CategoriasModel, {
  foreignKey: 'categoria_id',
  onDelete: 'SET NULL',
});

PostsModel.belongsTo(AutoresModel, {
  foreignKey: 'autor_id',
  onDelete: 'SET NULL',
});

export default PostsModel;

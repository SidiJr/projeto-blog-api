import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const AutoresModel = sequelize.define(
  'Autor',
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    tableName: 'autores',
    timestamps: false,
  }
);

export default AutoresModel;

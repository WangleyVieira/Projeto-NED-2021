'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlbunsNeds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AlbunsNeds.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    cidade: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    estado: DataTypes.STRING,
    telefone: DataTypes.STRING,
    tituloFoto: DataTypes.STRING,
    nomeFotografo: DataTypes.STRING,
    nomeFoto: DataTypes.STRING,
    dataAutorizacao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AlbunsNeds',
  });
  return AlbunsNeds;
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AlbunsNeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      dataNascimento: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      tituloFoto: {
        type: Sequelize.STRING
      },
      nomeFotografo: {
        type: Sequelize.STRING
      },
      nomeFoto: {
        type: Sequelize.STRING
      },
      dataAutorizacao: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AlbunsNeds');
  }
};
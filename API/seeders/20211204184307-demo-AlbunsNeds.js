'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    

      await queryInterface.bulkInsert('AlbunsNeds', 
      [{
        nome: "Wangley",
        cpf: "454454545441",
        email: "teste@gmail.com",
        cidade: "Corumba",
        dataNascimento: "2005-12-04",//adicionado coluna
        estado: "MS",
        telefone: "465455645",
        tituloFoto: "Ned",
        nomeFotografo: "Seilano",
        nomeFoto: "Neddddd",
        dataAutorizacao: "2021-12-04",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Matheus",
        cpf: "65656526262",
        email: "tesdsdte@gmail.com",
        cidade: "Corumba",
        dataNascimento: "2000-12-04",//adicionado coluna
        estado: "MS",
        telefone: "465455645",
        tituloFoto: "Ned",
        nomeFotografo: "Seilano",
        nomeFoto: "Neddddd",
        dataAutorizacao: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('AlbunsNeds', null, {});
     
  }
};

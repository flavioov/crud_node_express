'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return  queryInterface.createTable('users', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return  queryInterface.dropTable('users');
  }

};


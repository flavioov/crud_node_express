'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return  queryInterface.createTable('users', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {
    return  queryInterface.dropTable('users');
  }
};

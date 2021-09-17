'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'image', {
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'image');
  }
};

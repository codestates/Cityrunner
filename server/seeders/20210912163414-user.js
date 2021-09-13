'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
      [
        {
          email : 'test1@test.com',
          password : 'test1',
          username : 'test1',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          email : 'test2@test.com',
          password : 'test2',
          username : 'test2',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          email : 'test3@test.com',
          password : 'test3',
          username : 'test3',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          email : 'test4@test.com',
          password : 'test4',
          username : 'test4',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          email : 'test5@test.com',
          password : 'test5',
          username : 'test5',
          createdAt : new Date(),
          updatedAt : new Date()
        }
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

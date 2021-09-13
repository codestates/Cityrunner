'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('medals', 
      [
        {
          medalName : '10km',
          medalDesc : '10km 달렸습니다.',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          medalName : '30km',
          medalDesc : '30km 달렸습니다.',
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          medalName : '50km',
          medalDesc : '50km 달렸습니다.',
          createdAt : new Date(),
          updatedAt : new Date()
        },
      ]
    );

    await queryInterface.bulkInsert('userMedals', 
      [
        {
          userId : 1,
          medalId : 1,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          userId : 1,
          medalId : 2,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          userId : 2,
          medalId : 1,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          userId : 2,
          medalId : 3,
          createdAt : new Date(),
          updatedAt : new Date()
        },
      ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('medals', null, {});
    await queryInterface.bulkDelete('userMedals', null, {});
  }
};

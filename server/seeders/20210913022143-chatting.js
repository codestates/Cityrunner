'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('chattingRooms', 
      [
        {
          postId: 1,
          memberId: 2,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          postId: 1,
          memberId: 3,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          postId: 1,
          memberId: 1,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          postId: 1,
          memberId: 4,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          postId: 2,
          memberId: 1,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          postId: 2,
          memberId: 4,
          createdAt : new Date(),
          updatedAt : new Date()
        },
      ]);

      await queryInterface.bulkInsert('chattingLogs', 
        [
          {
            chattingRoomId: 1,
            memberId: 2,
            comment: '안녕하세요',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            chattingRoomId: 1,
            memberId: 3,
            comment: '안녕하세요~~',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            chattingRoomId: 2,
            memberId: 4,
            comment: '안녕하세요 잘부탁드려요',
            createdAt: new Date(),
            updatedAt: new Date()
          },
        ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('chattingRooms', null, {});
    await queryInterface.bulkDelete('chattingLogs', null, {});
  }
};

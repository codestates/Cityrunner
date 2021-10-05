'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', 
      [
        {
          level: '하',
          distance: 3,
          time: 19,
          max: 5,
          title: '가볍게 달리실 분',
          comment: '올림픽공원 잔디광장 세번째 벤치',
          location: '올림픽',
          postManager: 2,
          join: 4,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          level: '하',
          distance: 4,
          time: 20,
          max: 3,
          title: '저녁먹고 달려요',
          comment: '여의도 IFC몰 스타벅스 앞',
          location: '여의도',
          postManager: 1,
          join: 2,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          level: '중',
          distance: 5,
          time: 19,
          max: 5,
          title: '화이팅',
          comment: '뚝섬역 3번출구',
          location: '뚝섬',
          postManager: 3,
          join: 0,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          level: '상',
          distance: 10,
          time: 20,
          max: 5,
          title: '같이 달려요',
          comment: '반포한강공원 어디서 만나나요',
          location: '반포',
          postManager: 2,
          join: 0,
          createdAt : new Date(),
          updatedAt : new Date()
        },{
          level: '상',
          distance: 5,
          time: 18,
          max: 5,
          title: '같이 달려요',
          comment: '반포한강공원 어디서 만나나요',
          location: '반포',
          postManager: 2,
          join: 0,
          createdAt : new Date(),
          updatedAt : new Date()
        },{
          level: '상',
          distance: 12,
          time: 20,
          max: 5,
          title: '같이 달려요',
          comment: '반포한강공원 어디서 만나나요',
          location: '반포',
          postManager: 2,
          join: 0,
          createdAt : new Date(),
          updatedAt : new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};

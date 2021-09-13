'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('chattingLogs', 'chattingRoomId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "chattingRooms", key: "id" },
      // 참조하고 있는 프라이머리 키의 값이 변했을 때 영향을 받는 과정
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("chattingLogs", "chattingRoomId");
  }
};

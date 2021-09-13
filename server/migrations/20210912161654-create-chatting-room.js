'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('chattingRooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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

    await queryInterface.addColumn('chattingRooms', 'memberId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
      // 참조하고 있는 프라이머리 키의 값이 변했을 때 영향을 받는 과정
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn('chattingRooms', 'postId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "posts", key: "id" },
      // 참조하고 있는 프라이머리 키의 값이 변했을 때 영향을 받는 과정
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('chattingRooms');
  }
};
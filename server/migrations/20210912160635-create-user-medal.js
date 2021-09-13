'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userMedals', {
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

    await queryInterface.addColumn('userMedals', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
      // 참조하고 있는 프라이머리 키의 값이 변했을 때 영향을 받는 과정
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn('userMedals', 'medalId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "medals", key: "id" },
      // 참조하고 있는 프라이머리 키의 값이 변했을 때 영향을 받는 과정
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userMedals');
  }
};
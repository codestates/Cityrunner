'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chattingLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.chattingLog.belongsTo(models.user, {foreignKey : 'memberId'});
      models.chattingLog.belongsTo(models.chattingRoom, {foreignKey : 'chattingRoomId'});
    }
  };
  chattingLog.init({
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chattingLog',
  });
  return chattingLog;
};
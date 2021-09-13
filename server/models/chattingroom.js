'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chattingRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.chattingRoom.belongsTo(models.user);
      models.chattingRoom.belongsTo(models.post);
      models.chattingRoom.hasMany(models.chattingLog);
    }
  };
  chattingRoom.init({
    
  }, {
    sequelize,
    modelName: 'chattingRoom',
  });
  return chattingRoom;
};
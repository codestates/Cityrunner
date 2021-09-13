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
      models.chattingRoom.belongsTo(model.user);
      models.chattingRoom.belongsTo(model.post);
      models.chattingRoom.hasMany(model.chattingLog);
    }
  };
  chattingRoom.init({
    
  }, {
    sequelize,
    modelName: 'chattingRoom',
  });
  return chattingRoom;
};
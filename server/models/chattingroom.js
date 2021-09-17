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
      models.chattingRoom.belongsTo(models.user, {foreignKey : 'memberId'});
      models.chattingRoom.belongsTo(models.post, {foreignKey : 'postId'});
    }
  };
  chattingRoom.init({
    
  }, {
    sequelize,
    modelName: 'chattingRoom',
  });
  return chattingRoom;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.post, {foreignKey : 'postManager'});
      models.user.hasMany(models.chattingLog, {foreignKey : 'memberId'});
      models.user.hasMany(models.userMedal, {foreignKey : 'userId'});
      models.user.hasMany(models.chattingRoom, {foreignKey : 'memberId'});
    }
  };
  user.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    refreshToken: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userMedal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.userMedal.belongsTo(models.user, {foreignKey : 'userId'});
      models.userMedal.belongsTo(models.medal, {foreignKey : 'medalId'});
    }
  };
  userMedal.init({
    
  }, {
    sequelize,
    modelName: 'userMedal',
  });
  return userMedal;
};
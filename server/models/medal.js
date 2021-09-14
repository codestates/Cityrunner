'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.medal.hasMany(models.userMedal);
    }
  };
  medal.init({
    medalName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medalDesc: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'medal',
  });
  return medal;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sold extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sold.belongsTo(models.Vapestore,{
        foreignKey:'VapestoreId'
      })
    }
  }
  Sold.init({
    VapestoreId: DataTypes.INTEGER,
    User: DataTypes.STRING,
    email: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sold',
  });
  return Sold;
};
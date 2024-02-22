'use strict';
const {
  Model
} = require('sequelize');
const formatRupiah = require('../helpers/helper');
module.exports = (sequelize, DataTypes) => {
  class Vapestore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vapestore.belongsTo(models.User,{
        foreignKey : "UserId"
      })
      Vapestore.hasMany(models.Sold,{
        foreignKey : "VapestoreId"
      })
      Vapestore.belongsTo(models.Vapehascategory,{
        foreignKey : "VapehascategoryId"
      })
    }

    get harga(){
      return formatRupiah(this.price)
    }
  }
  Vapestore.init({
    VapehascategoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    status: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vapestore',
  });
  return Vapestore;
};
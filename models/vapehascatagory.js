'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vapehascategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vapehascategory.belongsTo(models.Category,{
        foreignKey:'CategoryId'
      })
      Vapehascategory.hasMany(models.Vapestore,{
        foreignKey:'VapehascategoryId'
      })
    }
  }
  Vapehascategory.init({
    name: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    merk: DataTypes.STRING,
    desc: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vapehascategory',
  });
  return Vapehascategory;
};
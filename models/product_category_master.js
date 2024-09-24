'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_category_masters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({products,carts}) {
      // this.belongsTo(products,{foreignKey:'id'})
      this.hasMany(products,{foreignKey:'id'})
      this.hasMany(carts,{foreignKey:'id'})
      // this.belongsTo(carts,{foreignKey:'id'})
    }
    toJSON(){
      return {...this.get(),createdAt:undefined,updatedAt:undefined}
    }
  }
  product_category_masters.init({
    name: DataTypes.STRING,
    is_active: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'product_category_masters',
  });
  return product_category_masters;
};
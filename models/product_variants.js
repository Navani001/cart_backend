'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_variants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({products}) {
      this.belongsTo(products,{foreignKey:'product_id'})
      // this.hasMany(products,{foreignKey:'id'})
      // define association here
    }
    toJSON(){
      return {...this.get(),createdAt:undefined,updatedAt:undefined}
    }
  }
  product_variants.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    is_active: DataTypes.NUMBER,
    product_id: {type:DataTypes.NUMBER,
      references: {
        model: 'products',  // Foreign key to the product_category_master model
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'product_variants',
  });
  return product_variants;
};
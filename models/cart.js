"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ product_category_masters, product_variants }) {
     
      this.belongsTo(product_category_masters, { foreignKey: "category_id" });
      this.belongsTo(product_variants, { foreignKey: "product_id" });
      
    }
    toJSON() {
      return { ...this.get(), createdAt: undefined, updatedAt: undefined };
    }
  }
  carts.init(
    {
      category_id: {
        type: DataTypes.NUMBER,
        references: {
          model: "product_category_master", // Foreign key to the product_category_master model
          key: "id",
        },
      },
      quantity: DataTypes.NUMBER,
      total_price: DataTypes.NUMBER,
      product_id: {
        type: DataTypes.NUMBER,
        references: {
          model: "product_varients", // Foreign key to the product_category_master model
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "carts",
    }
  );
  return carts;
};

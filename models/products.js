"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ product_category_masters, product_variants }) {
      // this.hasMany(product_category_masters, { foreignKey: "id" });
      // this.belongsTo(product_variants, { foreignKey: "id" });
      this.belongsTo(product_category_masters, { foreignKey: "category_id" });
      this.hasMany(product_variants, { foreignKey: "id" });
      // define association here
    }
    toJSON() {
      return { ...this.get(), createdAt: undefined, updatedAt: undefined };
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
      category_id: {
        type: DataTypes.NUMBER,
        references: {
          model: "product_category_master",
          key: "id",
        },
      },
      img_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};

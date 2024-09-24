const {
  carts,
  products,
  product_variants,
  product_category_masters,
} = require("../../../models");
const addtocart_data = async (product_id, quantity, category_id, callback) => {
  await carts.create({
    category_id: category_id,
    quantity: quantity,
    product_id: product_id,
  });
  callback(null, "success");
};
const update_the_quantity_data = async (id, val, callback) => {
  await carts.increment("quantity", {
    by: val,
    where: {
      id: id,
    },
  });

  callback(null, "Cart quantity updated successfully");
};
const food_available_data = async (callback) => {
  const food = await products.findAll({include:[{model:product_category_masters}]});
  callback(null, food);
};
const cart_data_data = async (callback) => {
  const cart = await carts.findAll({
    include: [{ model: product_variants, include: [{ model: products }] }],
  });
  callback(null, cart);
};
const food_data_data = async (id, callback) => {
  const food = await products.findAll({ where: { id: id } });
  callback(null, food);
};
const food_varients_data = async (id, callback) => {
  const food = await product_variants.findAll({ where: { product_id: id } });
  console.log(food);
  callback(null, food);
};
const category_data=async(callback)=>{
  const category=await product_category_masters.findAll();
  callback(null,category);
 };
 const deletecart_data=async(id,callback)=>{
  const dele=await carts.destroy({
    where: {
      id: id,
    },
  });
  callback(null,dele)
 }
module.exports = {
  food_available_data,
  food_data_data,
  food_varients_data,
  cart_data_data,
  update_the_quantity_data,
  addtocart_data,
  category_data,
  deletecart_data
};

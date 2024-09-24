const express = require("express");
const router = express.Router();
const {
  deletecart,
  food_available,
  food_data,
  food_varients,
  cart_data,
  update_the_quantity,
  addtocart,
  category,
} = require("../controlleer/users/user.js");
router.get("/food_available", food_available);
router.get("/category", category);
router.get("/cart_data", cart_data);
router.post("/food_data", food_data);
router.post("/food_varients", food_varients);
router.post("/update_the_quantity", update_the_quantity);
router.post("/addtocart", addtocart);
router.post("/deletecart", deletecart);
module.exports = router;

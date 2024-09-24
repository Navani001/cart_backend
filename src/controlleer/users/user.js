const {
  food_available_data,
  food_data_data,
  food_varients_data,
  cart_data_data,
  update_the_quantity_data,
  addtocart_data,
  category_data,
  deletecart_data,
} = require("../../models/user/user.js");
const deletecart=(req,res)=>{
  deletecart_data(req.body.id, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
}
const food_available = (req, res) => {
  food_available_data((err, result) => {
 
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
};
const category=(req,res)=>{
  category_data((err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      const category=result.map((item)=>{
        return item.name
      })

      res.status(200).json(category);
    }
  });
}
const update_the_quantity = (req, res) => {
  update_the_quantity_data(req.body.id, req.body.val, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
};
const food_data = (req, res) => {
  const id = req.body.id;
  food_data_data(id, (err, result) => {
    console.log(result, result);
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
};
const food_varients = (req, res) => {
  food_varients_data(req.body.id, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
};
const cart_data = (req, res) => {
  cart_data_data((err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      // res.status(200).json(result);
      const formdata = result.map((item) => {
        const product = item["product_variant"]["product"];

        return {
          id: item.id,
          name: product.name,
          quantity: item.quantity,
          price: item["product_variant"]["price"],
        };
      });
      res.status(200).json(formdata);
    }
  });
};
const addtocart = (req, res) => {
  addtocart_data(
    req.body.product_id,
    req.body.quantity,
    req.body.category_id,
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        res.status(200).json(result);
      }
    }
  );
};
module.exports = {
  addtocart,
  food_available,
  food_data,
  food_varients,
  cart_data,
  update_the_quantity,
  category,deletecart
};

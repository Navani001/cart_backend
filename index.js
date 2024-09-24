const express = require("express");
const app = express();
const { sequelize } = require("./models");
const cors = require("cors");
require("dotenv").config();
const user = require("./src/routes/user.js");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://192.168.134.131:3000",
      "http://localhost:5173",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);
app.use(express.static("public"));
app.use("/user/cart", user);

sequelize.authenticate().then((req) => {
  app.listen(5000, function () {
    console.log("Server is running on port 5000");
  });
});

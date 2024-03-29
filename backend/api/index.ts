const port = 4000;
const express = require("express");
var app = express();
const multer = require("multer");
const mongoDB = require("mongoose");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");
const { error, Console } = require("console");
const { default: mongoose } = require("mongoose");

app.use(express.json());
app.use(cors());
//Mongo intialising
mongoDB.connect(
  "mongodb+srv://suranusha:anusha123@cluster0.yjuo9vl.mongodb.net/ecommerce"
);
//API creation
app.get("/", (req, res) => {
  res.send("Express app is running");
});
//Image storage Engine

//mongoose Product schema
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  image: { type: String, require: true },
  category: { type: String, require: true },
  newprice: {
    type: Number,
    require: true,
  },
  oldprice: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});
//Adding mongoose Users schema
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  auth: {
    type: String,
    require: true,
  },
});
//users signup api
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, error: "email is laready used" });
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: [],
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({
    success: true,
    token,
  });
});
//API for adding product to mongoose from admin panel
app.post("/addproduct", async (req, res) => {
  const products = await Product.find({});

  let id;
  if (products.length > 0) {
    const lastproduct = products.slice(-1);

    var lastid = lastproduct[0];
    id = lastid.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    newprice: Number(req.body.newprice),
    oldprice: Number(req.body.oldprice),
  });
  await product.save();
  res.json({
    success: true,
    name: req.body.name,
  });
});
//API for removing product to mongoose from admin panel
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });

  res.json({
    success: 1,
    name: req.body.id,
  });
});
//API for adding users cart products
app.post("/addcartproduct", async (req, res) => {
  let user = await Users.findOne({ auth: req.body.auth });

  if (user) {
    user = user.cartData;
    console.log(user);
    user = [...user, ...req.body.cart];
    await Users.updateOne({ auth: req.body.auth }, { cartData: user });
  }
  res.json({
    success: true,
  });
});
//API for fetching users cart products
app.post("/fetchcartproduct", async (req, res) => {
 
    res.json({
      success: 1,
      data: []
    });
  
});
//API for fetching products from db
app.get("/allproducts", async (req, res) => {
  const products = await Product.find({});
  res.json({
    success: 1,
    data: products,
  });
});
//API for login
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    let passcompare = req.body.password === user.password;
    if (passcompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret-ecom");
      await Users.updateOne({ _id: user._id }, { auth: token });
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({
        success: false,
        error: "wrong password",
      });
    }
  } else {
    res.json({
      success: false,
      error: "no email found",
    });
  }
});
app.listen(port, (error) => {
  if (!error) {
    console.log("server running:" + port);
  } else {
    console.log("Error:" + error);
  }
});

const route =require("express").Router();
const productController = require("../../controllers/product/productController");
route.get("/show-product",productController.showProduct);

module.exports = route;
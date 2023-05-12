const route =require("express").Router();
const productController = require("../../controllers/product/productController");
route.get("/delete-product/:id",productController.deleteProduct);
route.get("/show-product",productController.showProduct);

module.exports = route;
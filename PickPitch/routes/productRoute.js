const productRoute = require("express").Router();
const Paginated = require("../config/pagination-config");
const productController = require("../controller/productController");


productRoute.get("/:page",Paginated,productController.getProduct);


module.exports = productRoute;

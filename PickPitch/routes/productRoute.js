const productRoute = require("express").Router();
const Paginated = require("../config/pagination-config");
const productController = require("../controller/productController");

productRoute.get("/search", productController.searchPitch);
productRoute.get("/:idManager", productController.searchByManager);
productRoute.get("/",productController.getProduct);


module.exports = productRoute;

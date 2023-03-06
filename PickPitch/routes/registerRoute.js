const registerRoute = require("express").Router();
const registerController = require("../controller/registerController");

registerRoute.get("/", registerController.getRegister);
registerRoute.post("/", registerController.postRegister);

module.exports = registerRoute;
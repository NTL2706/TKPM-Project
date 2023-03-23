const managerRoute = require("express").Router();
const managerController = require("../controller/managerController");

managerRoute.get("/",managerController.getManager);

module.exports = managerRoute;

const loginRoute = require("express").Router();
const loginController =require("../controller/loginController");
const passport = require("passport");
loginRoute.get("/", loginController.getLogin);
loginRoute.post("/", passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/login",
}))

module.exports = loginRoute;
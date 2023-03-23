const loginRoute = require("./loginRoute");
const registerRoute = require("./registerRoute");
const homeRoute = require("./homeRoute");
const productRoute = require("./productRoute");
const managerRoute = require("./managerRoute");
function mainRoutes (app){
    app.use("/", homeRoute);
    app.use("/login",loginRoute);
    app.use("/register", registerRoute);
    app.use("/logout", (req,res,next)=>{
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    })
    app.use("/product",productRoute);
    app.use("/manager", managerRoute);
}

module.exports = mainRoutes;
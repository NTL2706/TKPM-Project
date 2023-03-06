const homeRoute = require("express").Router();

homeRoute.get("/", (req,res)=>{
    if(req.user){
        const user_name = req.user.firstname +" "+ req.user.lastname;
        res.render("home.hbs", {user:user_name});
    }
    else{
        res.redirect("/login");
    }
    }
)

module.exports = homeRoute;
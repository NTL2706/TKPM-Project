const bcrypt = require("bcrypt");
const salt = 10;
const userModel = require("../model/userModel");
const registerController = {
    getRegister: async(req,res)=>{
        res.render("register.hbs");
    },

    postRegister: async(req,res)=>{
        try {
            console.log(req.body.firstname, req.body.lastname, req.body.email, req.body.password)
            const hashPassword = await bcrypt.hash(req.body.password,salt);
            const user = new userModel({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                password: hashPassword
            })
            if(!await userModel.findOne({email:req.body.email})){
                user.save();
            }
            res.redirect("/login")
        } catch (error) {
            res.status(404).json({error: error});
        }
    }
}

module.exports = registerController;
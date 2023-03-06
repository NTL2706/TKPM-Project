const loginController = {
    getLogin: async(req, res)=>{
        if(!req.user)
            res.render("login.hbs");
    },
}

module.exports = loginController;
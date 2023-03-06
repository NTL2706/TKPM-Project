const passport = require("passport-local");
const userController = require("../model/userModel");
const LocalStrategy = passport.Strategy;
const bcrypt = require("bcrypt");

function initializePassport(passport){
    const authenticateUser = async(email,password,done)=>{
        const user = await userController.findOne({email: email});
        if (!user) return done (null,false,{message: "No user have that email"});
        try{
            if (await bcrypt.compare(password,user.password)){
                console.log("buoc1");
                return done(null, user);
            }else{
                return done(null,false,{message: "Password incorrect"});
            }
        }catch(e){
            return done(e);
        }
    }

    passport.use(new LocalStrategy({usernameField: "email"},authenticateUser));
    passport.serializeUser((user,done)=>{
        console.log("buoc2");
        done(null,{
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            id:user._id
        });
    })

    passport.deserializeUser((user,done)=>{
        console.log("buoc3");
        done(null,user);
    })
}

module.exports = initializePassport;
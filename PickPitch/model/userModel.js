const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    }
},{collection: "User"})

const UserModel = mongoose.model("User",UserSchema);

module.exports = UserModel; 
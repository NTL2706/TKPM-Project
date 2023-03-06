const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const managerSchema = new Schema({
    name: String,
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },

    addressofpitch: String,
    
    pitch:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Pitch"
        }
    ]
},{collection:"Manager"});

const Manager = mongoose.model("Manager",managerSchema);

module.exports = Manager;
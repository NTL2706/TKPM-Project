const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pitchSchema = new Schema({
    Name:String,
    TypeOfPitch: Number,
    Price:Number,
    ImageOfPitch:String,
    
},{collection:"Pitch"})

const Pitch = mongoose.model("Pitch",pitchSchema);

module.exports = Pitch;
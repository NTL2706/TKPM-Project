const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    pitchs:[Object],
    user_id:{
        type:mongoose.Schema.Types.ObjectId
    },
    price:Number,
    is_delete: Boolean,
    not_paid: Boolean,
    total: Number,
    create_at:{
        type:Date,
        default:Date.now()
    }
},{collection:"Ticket"})

const TicketModel = mongoose.model("Ticket", TicketSchema);

module.exports = TicketModel;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    pitchs:[Object],
    price:Number,
    is_delete: Boolean,
    not_paid: Boolean,
    total: Number,
},{collection:"Ticket"})

const TicketModel = mongoose.model("Ticket", TicketSchema);

module.exports = TicketModel;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    pitch_id: [{
        type:mongoose.Schema.Types.ObjectId
    }],
    time:[Number],
    price:Number,
    is_delete: Boolean,
    is_paid: false,
},{collection:"Ticket"})

const TicketModel = mongoose.model("Ticket", TicketSchema);

module.exports = TicketModel;

{
    pitch_id:
    time:
}
{
    pitch_id:
    time:
}
{
    pitch_id:
    time:
}
{
    pitch_id:
    time:
}

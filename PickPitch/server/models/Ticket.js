<<<<<<< HEAD
﻿const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema(
  {
    pitch_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    time: [Number],
    price: Number,
    create_at: Date,
    is_delete: Boolean,
    is_paid: Boolean,
  },
  { collection: "Ticket" }
);

const TicketModel = mongoose.model("Ticket", TicketSchema);

module.exports = TicketModel;
=======
﻿const mongoose = require("mongoose");
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

>>>>>>> 3616d9e9324cfc63d2cda72639ac253a0b62bdf4

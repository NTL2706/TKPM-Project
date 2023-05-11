const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema(
  {
    pitchs: [Object],
    price: Number,
    not_paid: Boolean,
    total: Number,
    payment_type: String,

    payment_intent: String,
    create_at: {
      type: Date,
      default: Date.now(),
    },
    update_at: {
      update_time: {
        type: Date,
        default: Date.now(),
      },
      update_content: {
        type: String,
        maxlength: 255,
        default: "create category",
      },
    },

    is_delete: Boolean,
  },
  { collection: "Ticket" }
);

const TicketModel = mongoose.model("Ticket", TicketSchema);

module.exports = TicketModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pitch = new Schema(
  {
    name: { type: String, maxlength: 255 },
    details: { type: String },
    category: { type: String, maxlength: 255 },
    list_image: [],
    price: { type: Number },
    ratting: { type: Number, default: 0 },

    // tracking information
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
        default: "create pitch",
      },
    },
    is_delete: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "product" }
);

module.exports = mongoose.model("Pitch", Product);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    comment: { type: String, maxlength: 1000 },
    user_id: { type: Schema.Types.ObjectId },
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
        default: "create account",
      },
    },
    is_delete: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "product" }
);

module.exports = mongoose.model("Product", Product);

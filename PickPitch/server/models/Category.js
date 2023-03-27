const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Category = new schema(
  {
    name: { type: String, maxlength: 255 },
    listIdPitch: [{ type: schema.Types.ObjectId }],

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
  { collection: "owner" }
);

module.exports = mongoose.model("Category", Category);

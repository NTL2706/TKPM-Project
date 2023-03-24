const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const User = new Schema(
  {
    email: { type: String, maxlength: 255 },
    password: { type: String, maxlength: 255 },
    user_name: { type: String, maxlength: 255 },
<<<<<<< HEAD
    phone: { type: String, default: "**********", maxlength: 11 },

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
=======
    phone: { type: String, maxlength: 11 },
>>>>>>> fbc2a5d060baef47181e8bd5b4d3369744a60fe4
  },
  { collection: "user" }
);

User.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("User", User);

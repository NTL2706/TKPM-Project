const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const User = new Schema(
  {
    email: { type: String, maxlength: 255 },
    password: { type: String, maxlength: 255 },
    userName: { type: String, maxlength: 255 },
    phone: { type: String, maxlength: 11 },
  },
  { collection: "user" }
);

User.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("User", User);

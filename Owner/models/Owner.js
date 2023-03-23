const mongoose = require("mongoose");
const schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const Owner = new schema(
  {
    email: { type: String, maxlength: 255 },
    password: { type: String, maxlength: 255 },
    name: { type: String, maxlength: 255 },
    address: { type: String, maxlength: 255 },
  },
  { collection: "owner" }
);

Owner.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("Rwner", Owner);

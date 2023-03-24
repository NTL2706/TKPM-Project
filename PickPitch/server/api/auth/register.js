const User = require("../../models/User");
const bcrypt = require("bcrypt");
const env = require("../../configs/envConfigs")
const registerAPI = {
  register: async (req, res) => {
    try {
      const salt = env.salt;
      const checkUser = await User.findOne({ email: req.body.email });
      if (checkUser) return;

      const email = req.body.email;
      const userName = req.body.user_name;
      const phone = req.body.phone;

      const hashPassword = await bcrypt.hash(req.body.password, salt);

      const user = new User({
        email: email,
        password: hashPassword,
        user_name: userName,
        phone: phone,
      })

      await user.save();
      return res.status(200).json({ message: "Register successfully" });
    } catch (err) {
      // console.log(err);
      return res.status(400).json({ message: "Register again" });
    }
  },
};

module.exports = registerAPI;

const User = require("../../models/User");
const bcrypt = require("bcrypt");
const env = require("../../configs/envConfigs");
const { json } = require("body-parser");
const registerAPI = {
  register: async (req, res) => {
    try {
      const checkUser = await User.findOne({ email: req.body.email });
      if (checkUser)
      { 

        return res.json({message:"user is existed"});
      }

      const email = req.body.email;
      const userName = req.body.user_name;
      const phone = req.body.phone;
      const password = req.body.password;

      const salt = await bcrypt.genSalt(parseInt(env.salt));
      const hashPassword = await bcrypt.hash(password, salt);

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

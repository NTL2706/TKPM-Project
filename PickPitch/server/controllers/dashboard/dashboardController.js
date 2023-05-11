const User = require("../../models/User");
const Ticket = require("../../models/Ticket");

async function getDashBoard(req, res) {
  const countUser = await User.countDocuments({ is_delete: false });

  res.render("dashboard/dashboard");
}

module.exports = {
  getDashBoard,
};

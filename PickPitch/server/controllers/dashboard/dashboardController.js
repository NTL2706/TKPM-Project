const User = require("../../models");
const Ticket = require("../../models");

async function getDashBoard(req, res) {
  const countUser = await User.countDocuments({ is_delete: false });

  res.render("dashboard/dashboard");
}

module.exports = {
  getDashBoard,
};

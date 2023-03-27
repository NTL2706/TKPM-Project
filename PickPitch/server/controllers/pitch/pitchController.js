function getListPitch(req, res) {
  res.render("pitch/listPitch");
}

function addPitch(req, res) {
  res.render("pitch/addPitch");
}

module.exports = {
  getListPitch,
  addPitch,
};

const Pitch = require("../../models/Pitch");
const Category = require("../../models/Category");

async function getPitchs(req, res) {
  try {
    const pitchs = await Pitch.find({}, { _id: 1, ratting: 1, list_image: 1 });

    res.status(200).json(pitchs);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error while reading data from the database: " + err });
  }
}

async function getPitch(req, res) {
  const idPitch = req.params.idPitch;

  try {
    const pitch = await Pitch.findById(idPitch, {
      create_at: 0,
      update_at: 0,
      is_delete: 0,
    });

    res.status(200).json(pitch);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error while reading data from the database: " + err });
  }
}

module.exports = {
  getPitchs,
  getPitch,
};

const Pitch = require("../../models/Pitch");
const Category = require("../../models/Category");
const Stadium = require("../../models/Stadium");
const Price = require("../../models/Price");
const env = require("../../configs/envConfigs");

//GET [staidum/:id/:category]
async function getCategory(req, res) {
  const stadiumId = req.params.id_stadium;
  const category = req.params.category;

  try {
    const pitches = await Pitch.find(
      {
        stadium_id: stadiumId,
        category: category,
      },
      {
        create_at: 0,
        update_at: 0,
        is_delete: 0,
      }
    );

    const price = await Price.find(
      { id_stadium: stadiumId },
      {
        create_at: 0,
        update_at: 0,
        is_delete: 0,
        __v: 0,
      }
    );

    console.log(pitches);
    return;
  } catch (err) {
    console.log(err);
    res.status();
  }
}

module.exports = {
  getCategory,
};

const Stadium = require("../../models/Stadium");
const env = require("../../configs/envConfigs");

async function getAllStadium(req, res) {
  try {
    const stadiums = await Stadium.find(
      {},
      {
        _id: 1,
        name: 1,
        image: 1,
        address: 1,
      }
    );
    for (let stadium of stadiums) {
      stadium.image = env.urlImg + stadium.image;
    }

    res.status(200).json(stadiums);
  } catch (error) {
    console.log(error);
    res.status(404).json({ err: "Error server with " + error });
  }
}

//GET [stadum/:id]
async function getStadium(req, res) {
  const idStadium = req.params.id_stadium;

  try {
    const stadium = await Stadium.findById(idStadium, {
      is_delete: 0,
      create_at: 0,
      update_at: 0,
    });

    stadium.image = env.urlImg + stadium.image;
    stadium.list_image = stadium.list_image.map((img) => env.urlImg + img);

    res.status(200).json({ stadium });
  } catch (err) {
    console.log(err);
    res.status(404).json({ err: "Error server witch " + err });
  }
}

module.exports = {
  getAllStadium,
  getStadium,
};

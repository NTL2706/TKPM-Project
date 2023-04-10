const Stadium = require("../../models/Stadium");
const Price = require("../../models/Price");
const uploadImg = require("../../middleware/uploadImage");
const momentTimeZone = require("../../utils/momentTimezone");
const { Types } = require("mongoose");

function getListStadium(req, res) {}

function getAddStadium(req, res) {
  res.render("stadium/addStadium");
}

async function postAddStadium(req, res) {
  const listImg = [];
  let image = "";

  const files = await uploadImg.uploadFile(req, res);
  if (files.length > 0) {
    let i = 1;
    for (let file of files) {
      if (i == 1) image = file.filename;
      else listImg.push(file.filename);
      i = i + i;
    }
  }

  const stadium = new Stadium({
    name: req.body.name,
    address: req.body.address,
    details: req.body.detail,
    list_image: listImg,
    image: image,
  });

  const price_daytime = new Price({
    is_daytime: true,
    start_time: momentTimeZone.stringToDate(req.body.start_daytime, "HH:mm"),
    end_time: momentTimeZone.stringToDate(req.body.end_daytime, "HH:mm"),
    price: req.body.price_daytime,
    id_stadium: stadium._id,
  });

  const price_nighttime = new Price({
    is_daytime: false,
    start_time: momentTimeZone.stringToDate(req.body.start_nighttime, "HH:mm"),
    end_time: momentTimeZone.stringToDate(req.body.end_nighttime, "HH:mm"),
    price: req.body.price_nighttime,
    id_stadium: stadium._id,
  });

  try {
    await stadium.save();
    await price_daytime.save();
    await price_nighttime.save();
    res.redirect("/pitch");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getListStadium,
  getAddStadium,
  postAddStadium,
};

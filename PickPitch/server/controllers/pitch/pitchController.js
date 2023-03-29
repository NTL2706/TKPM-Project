const Pitch = require("../../models/Pitch");
const uploadImg = require("../../middleware/uploadImage");

function getListPitch(req, res) {
  res.render("pitch/listPitch");
}

function getAddPitch(req, res) {
  res.render("pitch/addPitch");
}

async function postAddPitch(req, res) {
  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;
  const detail = req.body.detail;

  const listImg = [];

  const files = await uploadImg.uploadFile(req, res);
  if (files.length > 0) {
    for (let file of files) {
      listImg.push(file);
    }
  }

  const pitch = new Pitch({
    name: name,
    category: category,
    price: price,
    detail: detail,
    list_image: listImg,
  });

  try {
    await pitch.save();
    res.redirect("/pitch");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getListPitch,
  getAddPitch,
  postAddPitch,
};

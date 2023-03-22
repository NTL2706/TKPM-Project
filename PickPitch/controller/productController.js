const pitchModel = require("../model/pitchModel");
const managerModel = require("../model/managerModel");
const paginatedResults = require("../config/pagination-config");
const productController = {
  getProduct: async (req, res) => {
    let array_pitch = [];
    let pitchs = [];

    let page = Math.max(parseInt(req.query.page) || 1, 1);
    if (req.query.page == null) {
      page = 1;
    }
    console.log(req.query.page);

    let all_of_pitch = (await paginatedResults(page, pitchModel)).results;
    let nextPage =
      "/product" + "?page=" + (await paginatedResults(page, pitchModel)).next;
    let currentPage =
      "/product" +
      "?page=" +
      (await paginatedResults(page, pitchModel)).currentPage;
    let prevousPage =
      "/product" +
      "?page=" +
      (await paginatedResults(page, pitchModel)).previous;

    for (let i = 0; i < all_of_pitch.length; i++) {
      let temp = {};
      temp.Name = all_of_pitch[i].Name;
      temp.Price = all_of_pitch[i].Price;
      temp.TypeOfPitch = all_of_pitch[i].TypeOfPitch;
      temp.ImageOfPitch = all_of_pitch[i].ImageOfPitch;
      if (i % 3 === 0 && i != 0) {
        pitchs.push(array_pitch);
        array_pitch = [];
        array_pitch.push(temp);
      } else {
        array_pitch.push(temp);
      }
    }

    pitchs.push(array_pitch);
    res.render("test", {
      Pitch: pitchs,
      nextLink: nextPage,
      currentLink: currentPage,
      previousLink: prevousPage,
      next: (await paginatedResults(page, pitchModel)).next,
      currentPage: (await paginatedResults(page, pitchModel)).currentPage,
      previous: (await paginatedResults(page, pitchModel)).previous,
    });
  },

  searchPitch: async (req, res) => {
    let array_pitch = [];
    let pitchs = [];

    const results = {};
    let page = Math.max(parseInt(req.query.page) || 1, 1);
    if (req.query.page == null) {
      page = 1;
    }

    const name = req.query.search;
    const limit = 6;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const product = await pitchModel
      .find({
        Name: { $regex: name, $options: "i" },
      })
      .skip(startIndex)
      .limit(limit);

    const size = await pitchModel.count({
      Name: { $regex: name, $options: "i" },
    });

    results.searchProduct = product;

    if (endIndex < size) {
      results.next = page + 1;
    }

    if (startIndex > 0) {
      results.previous = page - 1;
    }
    results.currentPage = page;

    let all_of_pitch = product;
    let nextPage =
      "/product/search/" + "?page=" + results.next + "&search=" + name;
    let currentPage =
      "/product/search" + "?page=" + results.currentPage + "&search=" + name;
    let prevousPage =
      "/product/search" + "?page=" + results.previous + "&search=" + name;

    for (let i = 0; i < all_of_pitch.length; i++) {
      let temp = {};
      temp.Name = all_of_pitch[i].Name;
      temp.Price = all_of_pitch[i].Price;
      temp.TypeOfPitch = all_of_pitch[i].TypeOfPitch;
      temp.ImageOfPitch = all_of_pitch[i].ImageOfPitch;
      if (i % 3 === 0 && i != 0) {
        pitchs.push(array_pitch);
        array_pitch = [];
        array_pitch.push(temp);
      } else {
        array_pitch.push(temp);
      }
    }

    pitchs.push(array_pitch);
    res.render("test", {
      Pitch: pitchs,
      nextLink: nextPage,
      currentLink: currentPage,
      previousLink: prevousPage,
      next: results.next,
      currentPage: results.currentPage,
      previous: results.previous,
    });
  },

  searchByManager: async (req, res) => {
    let array_pitch = [];
    let pitchs = [];

    const results = {};
    let page = Math.max(parseInt(req.query.page) || 1, 1);
    if (req.query.page == null) {
      page = 1;
    }

    console.log(page);
    const managerPitchChoose = await managerModel.findOne({
      _id: req.params.idManager,
    });
    const size = await managerModel
      .findOne({ _id: req.params.idManager })
      .count();

    const limit = 6;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    if (endIndex < size) {
      results.next = page + 1;
    }

    if (startIndex > 0) {
      results.previous = page - 1;
    }
    results.currentPage = page;

    let all_of_pitch = [];
    for (let i = 0; i < managerPitchChoose.pitch.length;i++){
      all_of_pitch.push(await pitchModel.findOne({_id:managerPitchChoose.pitch[i]}));
    }
    
    all_of_pitch.slice(startIndex,endIndex);
    let nextPage =
      "/product" +"/"+managerPitchChoose._id+ "?page=" + results.next;
    let currentPage =
      "/product" +"/"+managerPitchChoose._id+
      "?page=" +
      results.currentPage;
    let prevousPage =
      "/product" +"/"+managerPitchChoose._id+
      "?page=" +
      results.previous;

    for (let i = 0; i < all_of_pitch.length; i++) {
      let temp = {};
      
      temp.Name = all_of_pitch[i].Name;
      temp.Price = all_of_pitch[i].Price;
      temp.TypeOfPitch = all_of_pitch[i].TypeOfPitch;
      temp.ImageOfPitch = all_of_pitch[i].ImageOfPitch;
      if (i % 3 === 0 && i != 0) {
        pitchs.push(array_pitch);
        array_pitch = [];
        array_pitch.push(temp);
      } else {
        array_pitch.push(temp);
      }
    }

    pitchs.push(array_pitch);
    res.render("test", {
      Pitch: pitchs,
      nextLink: nextPage,
      currentLink: currentPage,
      previousLink: prevousPage,
      next: results.next,
      currentPage: results.currentPage,
      previous: results.previous,
      url:"/product" +"/"+managerPitchChoose._id+ "?page="
    });
  },
};

module.exports = productController;

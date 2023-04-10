const router = require("express").Router();
const stadiumAPI = require("../../api/stadium/stadium");
const pitchAPI = require("../../api/stadium/pitch");

router.get("/", stadiumAPI.getAllStadium);
router.get("/:id_stadium", stadiumAPI.getStadium);
router.get("/:id_stadium/:category", pitchAPI.getCategory);

module.exports = router;

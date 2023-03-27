const router = require("express").Router();
const pitchController = require("../../controllers/pitch/pitchController");

router.get("/", pitchController.getListPitch);
router.get("/add", pitchController.addPitch);

module.exports = router;

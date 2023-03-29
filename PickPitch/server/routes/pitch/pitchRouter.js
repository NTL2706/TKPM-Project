const router = require("express").Router();
const pitchController = require("../../controllers/pitch/pitchController");

router.get("/", pitchController.getListPitch);
router.get("/add", pitchController.getAddPitch);

router.post("/add", pitchController.postAddPitch);

module.exports = router;

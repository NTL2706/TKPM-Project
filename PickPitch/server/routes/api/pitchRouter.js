const router = require("express").Router();
const pitchAPI = require("../../api/pitch/pitch");

router.get("/", pitchAPI.getPitchs);
router.get("/:idPitch", pitchAPI.getPitch);

module.exports = router;

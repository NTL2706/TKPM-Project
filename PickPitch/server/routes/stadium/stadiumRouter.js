const router = require("express").Router();
const stadiumController = require("../../controllers/stadium/stadiumController");

router.get("/", stadiumController.getListStadium);
router.get("/add", stadiumController.getAddStadium);

router.post("/add", stadiumController.postAddStadium);

module.exports = router;

const router = require("express").Router();
const pitchRouter = require("./pitchRouter");

router.use("/", pitchRouter);

module.exports = router;

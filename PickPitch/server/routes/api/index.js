const router = require("express").Router();
const authRouter = require("./authRoute");
const imgRouter = require("./imgRouter");
const pitchRouter = require("./pitchRouter");

router.use("/auth", authRouter);
router.use("/img", imgRouter);
router.use("/pitchs", pitchRouter);

module.exports = router;

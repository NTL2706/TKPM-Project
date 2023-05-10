const router = require("express").Router();
const { watch } = require("../../models/User");
const authRouter = require("./authRoute");
const imgRouter = require("./imgRouter");
const stadiumRouter = require("./stadiumRouter");
const bookingRoute = require("./bookingRoute");

router.use("/auth", authRouter);
router.use("/img", imgRouter);
// router.use("/pitchs", pitchRouter);
router.use("/stadium", stadiumRouter);
router.use("/booking", bookingRoute);

module.exports = router;

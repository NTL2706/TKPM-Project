const router = require("express").Router();
const authRouter = require("./authRoute");
const imgRouter = require("./imgRouter");

router.use("/auth", authRouter);
router.use("/img", imgRouter);

module.exports = router;

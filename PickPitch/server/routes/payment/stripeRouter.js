const router = require("express").Router();
const paymentController = require("../../controllers/payment/payment");

router.post("/", paymentController.paymentStripe);

module.exports = router;

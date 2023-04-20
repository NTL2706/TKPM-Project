const route = require("express").Router();
const bookingAPI = require("../../api/booking/booking");

route.post("/", bookingAPI.postBooking);

module.exports =route;
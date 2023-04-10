const route = require("express").Router();
const bookingAPI = require("../../api/booking/booking");

route.get("/", bookingAPI);

module.exports =route;
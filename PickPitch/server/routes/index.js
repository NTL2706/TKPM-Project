const authnticaRoute = require("./authentication/index");
const apiRoute = require("./api/index");
const pitchRoute = require("./stadium/index");
const paymentRoute = require("./payment/index");

function route(app) {
  app.use("/auth", authnticaRoute);
  app.use("/api", apiRoute);
  app.use("/payment", paymentRoute);
  app.use("/stadium", pitchRoute);
}

module.exports = route;

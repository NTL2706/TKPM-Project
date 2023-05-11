const authnticaRoute = require("./authentication/index");
const apiRoute = require("./api/index");
const pitchRoute = require("./stadium/index");
const produtRoute = require("./product/productRoute");
const paymentRoute = require("./payment/index");
const dashboardRoute = require("./dashboard/index");

function route(app) {
  app.use("/", dashboardRoute);
  app.use("/auth", authnticaRoute);
  app.use("/api", apiRoute);
  app.use("/payment", paymentRoute);
  app.use("/stadium", pitchRoute);
  app.use("/product",produtRoute)
}

module.exports = route;

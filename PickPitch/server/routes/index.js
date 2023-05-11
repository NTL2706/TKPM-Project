const authnticaRoute = require("./authentication/index");
const apiRoute = require("./api/index");
const pitchRoute = require("./stadium/index");
const produtRoute = require("./product/productRoute");
function route(app) {
  app.use("/auth", authnticaRoute);
  app.use("/api", apiRoute);
  app.use("/stadium", pitchRoute);
  app.use("/product",produtRoute)
}

module.exports = route;

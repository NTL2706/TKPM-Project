const authnticaRoute = require("./authentication/index");
const apiRoute = require("./api/index");
const pitchRoute = require("./stadium/index");

function route(app) {
  app.use("/auth", authnticaRoute);
  app.use("/api", apiRoute);

  app.use("/stadium", pitchRoute);
}

module.exports = route;

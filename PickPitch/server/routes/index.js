const authnticaRoute = require("./authentication/index");
const apiRoute = require("./api/index");
const pitchRoute = require("./pitch/index");

function route(app) {
  app.use("/auth", authnticaRoute);
  app.use("/api", apiRoute);

  app.use("/pitch", pitchRoute);
}

module.exports = route;

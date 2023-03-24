const authenticaRouter = require("./authentication/index");
const apiRoute = require("./api/authRoute");

function route(app) {
  app.use("/auth", authenticaRouter);
  app.use("/api/", apiRoute);
}

module.exports = route;

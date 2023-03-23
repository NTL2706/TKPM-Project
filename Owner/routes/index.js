const authenticaRouter = require("./authentication/index");

function route(app) {
  app.use("/auth", authenticaRouter);
}

module.exports = route;

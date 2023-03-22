// Import library
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const expressHandlebarsSections = require("express-handlebars-sections");

const env = require("./Configs/EnvVariable");
// Setup variable
const app = express();
var PORT = env.port;
const hbs = exphbs.create({
  // config hbs
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: __dirname + "/Views/layouts",
  partialsDir: __dirname + "/views/partials",
});

// Deploying functions
// register `hbs.engine` with the Express app.
expressHandlebarsSections(hbs);
app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname + "Views"));

app.use(express.static(path.join(__dirname, "/public")));

// server listen
if (PORT == null || PORT == "") {
  PORT = 5000;
}

app.listen(PORT, function () {
  console.log("Server has started successfully");
});

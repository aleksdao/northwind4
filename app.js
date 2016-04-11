var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");





var app = express();

app.use(bodyParser.json());
// app.use("/bootstrap", express.static(path.join(__dirname, "./node_modules/bootstrap/dist")));
// app.use("/angular", express.static(path.join(__dirname, "./node_modules/angular")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(express.static(path.join(__dirname, "./browser")));


app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/", require("./routes"));

module.exports = app;

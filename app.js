var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");





var app = express();
module.exports = app;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(express.static(path.join(__dirname, "./browser")));

function indexPage(req, res, next){
  res.sendFile(path.join(__dirname, "index.html"));
};


app.get("/", indexPage);
app.get("/employees/:letter?", indexPage);
app.get("/products/:letter?", indexPage);

app.use("/", require("./routes"));


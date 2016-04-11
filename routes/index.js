var express = require("express");
var router = express.Router();
var db = require("../db");
var Employee = db.Employee;
var Product = db.Product;

router.get("/api/products", function (req, res, next) {
  Product.find()
    .then(function (products) {
      var activeLetters = [];
      products.forEach(function (product) {
        var firstLetter = product.name[0];
        if (activeLetters.indexOf(firstLetter) === -1)
          activeLetters.push(firstLetter)
      });
      res.send(activeLetters);
    })
})

router.get("/api/products/:letter", function (req, res, next) {
  Product.find({ name: new RegExp("^" + req.params.letter, "i") })
    .then(function (products) {
      res.send(products);
    })
});


router.get("/api/employees", function (req, res, next) {
  Employee.find()
    .then(function (employees) {
      var activeLetters = [];
      employees.forEach(function (employee) {
        var firstLetter = employee.name[0];
        if (activeLetters.indexOf(firstLetter) === -1)
          activeLetters.push(firstLetter)
      });
      res.send(activeLetters);
    })
})

router.get("/api/employees/:letter", function (req, res, next) {
  Employee.find({ name: new RegExp("^" + req.params.letter, "i") })
    .then(function (employees) {
      res.send(employees);
    })
});


module.exports = router;

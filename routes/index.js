var express = require("express");
var router = express.Router();
var db = require("../db");
var Employee = db.Employee;
var Product = db.Product;

router.get("/api/products", function (req, res, next) {
  var firstLetters = [];
  Product.find()
    .then(function (products) {
      products.forEach(function (product) {
        var firstLetter = product.name[0];
        if (firstLetters.indexOf(firstLetter) === -1)
          firstLetters.push(firstLetter)
      });
      console.log(firstLetters);
      res.send(firstLetters);
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
      var firstLetters = [];
      employees.forEach(function (employee) {
        var firstLetter = employee.name[0];
        if (firstLetters.indexOf(firstLetter) === -1)
          firstLetters.push(firstLetter)
      });
      console.log(firstLetters);
      res.send(firstLetters);
    })
})

router.get("/api/employees/:letter", function (req, res, next) {
  Employee.find({ name: new RegExp("^" + req.params.letter, "i") })
    .then(function (employees) {
      res.send(employees);
    })
});


module.exports = router;

var db = require("./db");
var Employee = db.Employee;
var Product = db.Product;
var Promise = require("bluebird");

var faker = require("faker");

var numEmployeesAndProducts = 200;
var productsAndEmployees = [];


var createProductsAndEmployees = function () {
  for (var i = 0; i <= numEmployeesAndProducts; i++) {
    productsAndEmployees.push(
      Product.create({
        name: faker.commerce.productName()
      })
    );
    productsAndEmployees.push(
      Employee.create({
        name: faker.name.findName()
      })
    );
  }

  return productsAndEmployees;
}

var seed = function () {

  return Promise.all(createProductsAndEmployees())

}

db.connect()
  .then(function () {
    return seed();
  })
  .then(function (employees) {
    console.log(employees);
  }, function (err) {
    console.error("Error while loading");
    console.error(err.stack);
  })
  .then(function () {
    process.exit();
  })

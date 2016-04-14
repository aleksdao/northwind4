var mongoose = require("mongoose");
var Promise = require("bluebird");

var employeeSchema = mongoose.Schema({
  name: String
});

var productSchema = mongoose.Schema({
  name: String
});

var Employee = mongoose.model("Employee", employeeSchema);
var Product = mongoose.model("Product", productSchema);

var _conn;

var connect = function () {
  if (_conn) return _conn;
  _conn = new Promise(function (resolve, reject) {
    mongoose.connect(process.env.CONN || "mongodb://localhost/northwind4", function (err) {
      if (err)
        return reject("make sure mongo is running and connection string is set");
      resolve(mongoose.connection);
    });
  });
  return _conn;
};



module.exports = {
  Employee: Employee,
  Product: Product,
  connect: connect
};

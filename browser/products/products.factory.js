northwind.factory("ProductsFactory", function ($http) {
  var factory = {};
  factory.fetchAll = function () {
    return $http.get("/api/products")
      .then(function (response) {
        var firstLetters = response.data;
        return firstLetters;
      })
  }
  factory.fetchByLetter = function (letter) {
    return $http.get("/api/products/" + letter)
      .then(function (response) {
        var products = response.data;
        return products;
      })
  }
  return factory;
})

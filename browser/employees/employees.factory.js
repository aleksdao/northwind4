northwind.factory("EmployeesFactory", function ($http) {
  var factory = {};
  factory.fetchAll = function () {
    return $http.get("/api/employees")
      .then(function (response) {
        var activeLetters = response.data;
        return activeLetters;
      })
  }
  factory.fetchByLetter = function (letter) {
    return $http.get("/api/employees/" + letter)
      .then(function (response) {
        var employees = response.data;
        return employees;
      })
  }
  return factory;
})

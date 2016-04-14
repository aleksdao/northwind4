northwind.factory("EmployeesFactory", function ($http) {
  var factory = {};
  //naming- better name 'fetchLetterMap'?
  factory.fetchAll = function () {
    return $http.get("/api/employees")
      .then(function (response) {
        var firstLetters = response.data;
        return firstLetters;
      });
  };
  factory.fetchByLetter = function (letter) {
    return $http.get("/api/employees/" + letter)
      .then(function (response) {
        var employees = response.data;
        return employees;
      });
  };
  return factory;
});

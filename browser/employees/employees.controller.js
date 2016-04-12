northwind.controller("EmployeesCtrl", function ($scope, firstLetters, EmployeesFactory) {
  $scope.type = "employees";
  $scope.firstLetters = firstLetters;
})

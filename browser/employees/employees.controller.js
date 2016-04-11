northwind.controller("EmployeesCtrl", function ($scope, firstLetters, EmployeesFactory) {
  $scope.firstLetters = firstLetters;
  $scope.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  $scope.filterByLetter = function (letter) {
    EmployeesFactory.fetchByLetter(letter)
      .then(function (employees) {
        $scope.employees = employees;
        $scope.activeLetter = letter;
      })
  }
})

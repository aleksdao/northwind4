northwind.controller("ProductsCtrl", function ($scope, activeLetters, ProductsFactory) {

  $scope.filterByLetter = function (letter) {
    ProductsFactory.fetchByLetter(letter)
      .then(function (products) {
        $scope.products = products;
        $scope.activeLetter = letter;
      })
  }
  $scope.activeLetters = activeLetters;
  $scope.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

})

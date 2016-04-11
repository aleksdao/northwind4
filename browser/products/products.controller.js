northwind.controller("ProductsCtrl", function ($scope, firstLetters, ProductsFactory) {
  $scope.type = "Products";
  $scope.firstLetters = firstLetters;
  // $scope.filterByLetter = function (letter) {
  //   console.log("clicking on", letter)
  //   ProductsFactory.fetchByLetter(letter)
  //     .then(function (products) {
  //       $scope.products = products;
  //       $scope.activeLetter = letter;
  //     })
  // }


})

northwind.config(function ($stateProvider) {
  $stateProvider
    .state("products.itemsByLetter", {
      url:"/:letter",
      templateUrl: "/itemsbyletter/itemsbyletter.html",
      resolve: {
        itemsByLetter: function (ProductsFactory, EmployeesFactory, $stateParams) {
          return ProductsFactory.fetchByLetter($stateParams.letter)
        }
      },
      controller: "ItemsByLetterCtrl"
    })
    .state("employees.itemsByLetter", {
      url:"/:letter",
      templateUrl: "/itemsbyletter/itemsbyletter.html",
      resolve: {
        itemsByLetter: function (ProductsFactory, EmployeesFactory, $stateParams) {
          return EmployeesFactory.fetchByLetter($stateParams.letter);
        }
      },
      controller: "ItemsByLetterCtrl"
    })
})

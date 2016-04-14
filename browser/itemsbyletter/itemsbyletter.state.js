northwind.config(function ($stateProvider) {
  $stateProvider
    .state("products.itemsByLetter", {
      url:"/:letter",
      templateUrl: "/itemsbyletter/itemsbyletter.html",
      resolve: {
        itemsByLetter: function (ProductsFactory, $stateParams) {
          return ProductsFactory.fetchByLetter($stateParams.letter);
        }
      },
      controller: "ItemsByLetterCtrl"
    })
    .state("employees.itemsByLetter", {
      url:"/:letter",
      templateUrl: "/itemsbyletter/itemsbyletter.html",
      resolve: {
        itemsByLetter: function (EmployeesFactory, $stateParams) {
          return EmployeesFactory.fetchByLetter($stateParams.letter);
        }
      },
      controller: "ItemsByLetterCtrl"
    });
});

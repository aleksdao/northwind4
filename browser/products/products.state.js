northwind.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.when("/", "/products");
  $stateProvider
    .state("products", {
      url: "/products",
      templateUrl: "/products/products.html",
      resolve: {
        firstLetters: function (ProductsFactory) {
          return ProductsFactory.fetchAll()
        }
      },
      controller: "ProductsCtrl"
    })
})

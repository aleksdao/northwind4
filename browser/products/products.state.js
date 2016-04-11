northwind.config(function ($stateProvider) {
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
    // .state("productsByLetter", {
    //   url: "/products/:letter",
    //   templateUrl: "/browser/products/productsbyletter.html",
    //   resolve: {
    //     productsByLetter: function (ProductsFactory, $stateParams) {
    //       return ProductsFactory.fetchByLetter($stateParams.letter);
    //     }
    //   }
    // })
})

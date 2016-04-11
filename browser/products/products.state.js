northwind.config(function ($stateProvider) {
  $stateProvider
    .state("products", {
      url: "/products",
      templateUrl: "/products/products.html",
      resolve: {
        activeLetters: function (ProductsFactory) {
          return ProductsFactory.fetchAll()
        }
      },
      controller: "ProductsCtrl"
    })

})


// .state("productsByLetter", {
//   url: "/products/:letter",
//   templateUrl: "/browser/products/productsbyletter.html",
//   resolve: {
//     productsByLetter:
//   }
// })

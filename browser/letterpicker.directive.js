//tried using directive but for some reason, wasn't able to pass activeLetters in correctly

northwind.directive("letterPickerDirective", function (ProductsFactory) {
  return {
    scope: {
      alphabet: "="
      // activeLetters: "="
    },
    templateUrl: "/letterpicker.html",
    link: function (scope) {
      scope.filterByLetter = function (letter) {
          ProductsFactory.fetchByLetter(letter)
            .then(function (products) {
              scope.itemsByLetter = products;
              scope.activeLetter = letter;
            })
      }
      scope.activeLetters = function () {
        return ProductsFactory.fetchAll()
          .then(function (activeLetters) {
            return activeLetters;
          })
      }
    }
  }
})

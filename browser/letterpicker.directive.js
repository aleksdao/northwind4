//tried using directive but for some reason, wasn't able to pass firstLetters in correctly

northwind.directive("letterPickerDirective", function (ProductsFactory) {
  return {
    scope: {
      alphabet: "=",
      firstLetters: "="
    },
    templateUrl: "/letterpicker.html",
    link: function (scope) {
      scope.filterByLetter = function (letter) {
          ProductsFactory.fetchByLetter(letter)
            .then(function (products) {
              scope.itemsByLetter = products;
              scope.firstLetter = letter;
            })
      }
    }
  }
})

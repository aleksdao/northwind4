//tried using directive but for some reason, wasn't able to pass firstLetters in correctly

northwind.directive("letterPickerDirective", function (ProductsFactory) {
  return {
    // scope: {
    //   firstLetters: "="
    // },
    templateUrl: "/letterpicker.html",
    link: function (scope) {
      scope.filterByLetter = function (letter) {
          ProductsFactory.fetchByLetter(letter)
            .then(function (products) {
              scope.itemsByLetter = products;
              scope.firstLetter = letter;
            })
      }
      scope.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      ProductsFactory.fetchAll()
        .then(function (firstLetters) {
          console.log(firstLetters);
          scope.firstLetters = firstLetters;
        });


    }
  }
})

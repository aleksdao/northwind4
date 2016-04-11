//tried using directive but for some reason, wasn't able to pass firstLetters in correctly

northwind.directive("letterPickerDirective", function (ProductsFactory, EmployeesFactory) {
  return {
    scope: {
      firstLetters: "=",
      type: "="

    },
    templateUrl: "/letterpicker.html",
    link: function (scope) {
      scope.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      scope.filterByLetter = function (letter) {
        if(scope.type === "Products") {
          ProductsFactory.fetchByLetter(letter)
            .then(function (products) {
              scope.itemsByLetter = products;
              scope.firstLetter = letter;
            })
        }
        else {
          EmployeesFactory.fetchByLetter(letter)
            .then(function (employees) {
              scope.itemsByLetter = employees;
              scope.firstLetter = letter;
            })
        }

      }
      // scope.firstLetters = scope.firstLetters;
      // scope.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      // ProductsFactory.fetchAll()
      //   .then(function (firstLetters) {
      //     console.log(firstLetters);
      //     scope.firstLetters = firstLetters;
      //   });
    }

    // }
  }
})

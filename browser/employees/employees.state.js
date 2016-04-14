northwind.config(function ($stateProvider) {
  $stateProvider
    .state("employees", {
      url: "/employees",
      templateUrl: "/employees/employees.html",
      resolve: {
        firstLetters: function (EmployeesFactory) {
          return EmployeesFactory.fetchAll();
        }
      },
      controller: "EmployeesCtrl"
    });
});

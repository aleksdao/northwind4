northwind.config(function ($stateProvider) {
  $stateProvider
    .state("employees", {
      url: "/employees",
      templateUrl: "/employees/employees.html",
      resolve: {
        activeLetters: function (EmployeesFactory) {
          return EmployeesFactory.fetchAll();
        }
      },
      controller: "EmployeesCtrl"
    })
})

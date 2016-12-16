var app = angular.module("includeApp", []).controller("includeAppCtrl", function ($scope) {
    var employees = [
        {name: "Ben", gender: "Male", salary: 55000},
        {name: "Sara", gender: "Female", salary: 55000},
        {name: "Mark", gender: "Male", salary: 55000},
        {name: "Pam", gender: "Female", salary: 55000},
        {name: "Ted", gender: "Male", salary: 55000}
    ];

    $scope.employees = employees;
    $scope.employeeView = "employeelist.html";


});

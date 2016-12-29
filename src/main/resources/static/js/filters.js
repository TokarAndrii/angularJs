var app = angular.module("filtersApp", []);
app.controller("filtersAppCtrl", function ($scope) {
    var employees = [
        {
            name: "Ben", dateOfBirth: new Date("November 23, 1980"),
            gender: "Male", salary: 55000.788, city: "Kyiv"
        },
        {
            name: "Sara", dateOfBirth: new Date("May 05, 1970"),
            gender: "Female", salary: 68000, city: "Lviv"
        },
        {
            name: "Mark", dateOfBirth: new Date("August 15, 1974"),
            gender: "Male", salary: 57000, city: "Kyiv"
        },
        {
            name: "Pam", dateOfBirth: new Date("October 27, 1979"),
            gender: "Female", salary: 53000, city: "Cherkassy"
        },
        {
            name: "Todd", dateOfBirth: new Date("December 30, 1983"),
            gender: "Male", salary: 60000, city: "Uman"
        },
        {
            name: "Andrii", dateOfBirth: new Date("October 13, 1990"),
            gender: "Male", salary: 55600.788, city: "Odessa"
        },
        {
            name: "Ania", dateOfBirth: new Date("August 25, 1987"),
            gender: "Female", salary: 68300, city: "Kharkiv"
        },
        {
            name: "Maks", dateOfBirth: new Date("August 15, 1974"),
            gender: "Male", salary: 57000, city: "Zaporizhia"
        },
        {
            name: "Dana", dateOfBirth: new Date("June 20, 1989"),
            gender: "Female", salary: 53050, city: "Dnipro"
        },
        {
            name: "Ted", dateOfBirth: new Date("July 12, 1981"),
            gender: "Male", salary: 60500, city: "Zhmerinka"
        }


    ];

    var countRows = 0;
    $scope.countRows = countRows;


    $scope.employees = employees;
    $scope.rowCount = 10;
    $scope.sortColumn = "-name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ?
            !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {

        if ($scope.sortColumn == column) {
            return $scope.reverseSort
                ? 'arrow-down'
                : 'arrow-up';
        }

        return '';
    }


})

var app = angular.module("validationformApp", []);
app.controller("validationformAppCtrl", function ($scope) {
    $scope.requireValue = true;
    $scope.matchPattern = new RegExp("[a-z]")
});

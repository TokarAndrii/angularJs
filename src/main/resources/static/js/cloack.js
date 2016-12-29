var app = angular.module("cloackApp",[]);
app.controller("cloackAppCtrl",function ($scope) {
    $scope.firstName = "Ivan";
    $scope.lastName = "Ivanov";
    $scope.age = "25";
    $scope.position = "Software Developer";
})


app.controller("styleCtrl",function ($scope) {
    $scope.styleObj = {
        color: "red",
        padding: "10px",
        border: "1px solid green",
        marginTop : "50px"
    };
})

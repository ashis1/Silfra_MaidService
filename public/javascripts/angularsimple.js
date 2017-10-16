var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $scope.namesss = "ashis";

    $scope.refresh=function(){
        $http.get('/api/days')
            .then(function (response) {
                $scope.getall = response.data;
            });
    }
    $scope.refresh();

    $scope.Insert = function () {
        $http.post('/api/days', this.input).then(function () {
            alert("success");
            $scope.refresh();
        }, function (error) {
           
            $scope.error1 = error.data;
            $scope.error2 = error;
            $scope.refresh();
        });
    };

});

var app = angular.module('homeApp', ['ui.router']);
app.config(function ($stateProvider) {
    var form1State = {
        name: 'form1',
        url: '/',
        templateUrl: '/templates/form1.html',
        controller: 'form1Ctrl'
    }

    var form2State = {
        name: 'requirement',
        url: '/requirement',
        templateUrl: '/templates/index.html',
        contoller: 'requirementCtrl'
    }

    $stateProvider.state(form1State);
    $stateProvider.state(form2State);
});

 

app.controller('form1Ctrl', function ($scope, $http) {
 
    $scope.Insert = function () {
        $http.post('/api/register', this.input).then(function () {
            
            $scope.input.Name = "";
            $scope.input.UserName = "";
            $scope.input.Password = "";
            $scope.input.PhoneNo = "";
            $scope.input.City = "";
            $scope.input.RePassword = "";
            $scope.input.Locality = "";
            $scope.input.FullAddress = "";
            $scope.input.Landmark = "";
            
            alert("success");
        }, function (error) {
            alert(JSON.stringify(error));
            $scope.IsSuccess = "";
            $scope.input.Password = "";
            $scope.input.RePassword = "";
        });
    };



    $scope.login = function (user) {
        $http.post('/api/login', user).then(function (response) {

            alert(JSON.stringify(response));
            console.log(response);
          
           

           
        }, function (error) {
            alert(JSON.stringify(error));
            alert(error.data);
            alert("hellom world");
            
            
        });
    };

});

app.controller('requirementCtrl', function ($scope, $http) {

    $scope.Insert = function () {
        
        $http.post('/api/requirements', this.input).then(function () {

            $scope.input.Name = "";
            $scope.input.UserName = "";
            $scope.input.Password = "";
            $scope.input.PhoneNo = "";
            $scope.input.City = "";
            $scope.input.RePassword = "";
            $scope.input.Locality = "";
            $scope.input.FullAddress = "";
            $scope.input.Landmark = "";

            alert("success");
        }, function (error) {
            alert(JSON.stringify(error));
            $scope.IsSuccess = "";
            $scope.input.Password = "";
            $scope.input.RePassword = "";
        });
    };



    

});

var clientApp = angular.module('clientApp', ['ui.router']);


clientApp.config(function ($stateProvider,  $urlRouterProvider,$locationProvider) {
    var addRequirmentState = {
        name: 'requirement',
        url: '/',
        templateUrl: '/templates/requirement.html',
        controller: 'requirementCtrl'
    }
 

    $stateProvider.state(addRequirmentState);
   
});

 

clientApp.controller('requirementCtrl', function ($scope, $http) {
    $scope.woktype= JSON.parse(localStorage.getItem('WorkTypes'));
    
 
    $scope.workType1 = "";
    $scope.workType2 = "";
    $scope.workType3 = "";
    $scope.workType4 = "";
    $scope.IsworkType1 = false;
    $scope.IsworkType2 = false;
    $scope.IsworkType3 = false;
    $scope.IsworkType4 = false;
    $scope.margin = "";

    $scope.val = JSON.parse(localStorage.getItem('WorkTypes'));
    if ($scope.val.length > 0) {
        $scope.margin = "0px";
    }
    else {
        $scope.margin = "90px";
    }
    for (var i = 0; i < 1; i++) {
        $scope.workType1 = $scope.val[0];
        $scope.workType2 = $scope.val[1];
        $scope.workType3 = $scope.val[2];
        $scope.workType4 = $scope.val[3];
    }
    if ($scope.workType1 == 'Cleaning' || $scope.workType2 == 'Cleaning' || $scope.workType3 == 'Cleaning' || $scope.workType4 == 'Cleaning') {
        $scope.IsworkType1 = true;
    }
    if ($scope.workType1 == 'Cooking' || $scope.workType2 == 'Cooking' || $scope.workType3 == 'Cooking' || $scope.workType4 == 'Cooking') {
        $scope.IsworkType2 = true;
    }
    if ($scope.workType1 == 'Baby Sitter' || $scope.workType2 == 'Baby Sitter' || $scope.workType3 == 'Baby Sitter' || $scope.workType4 == 'Baby Sitter') {
        $scope.IsworkType3 = true;
    }
    if ($scope.workType1 == 'Elder / old age Care' || $scope.workType2 == 'Elder / old age Care' || $scope.workType3 == 'Elder / old age Care' || $scope.workType4 == 'Elder / old age Care') {
        $scope.IsworkType4 = true;
    }
 
    $http.get('/api/requirments').then(function (response) {
        $scope.getall = response.data;
    });
 
    $scope.Insert = function (requirements) {
        requirements.WorkTypePreference = JSON.parse(localStorage.getItem('WorkTypes'));
        requirements.UrgencyPreference = localStorage.getItem('UrgencyType');
        requirements.SessionPreference = localStorage.getItem('SessionType');
        requirements.Gender = localStorage.getItem('GenderType');
        if ($scope.workType1 == 'Cleaning' || $scope.workType2 == 'Cleaning' || $scope.workType3 == 'Cleaning' || $scope.workType4 == 'Cleaning') {
            requirements.IsCleaner = true;
        }
        if ($scope.workType1 == 'Cooking' || $scope.workType2 == 'Cooking' || $scope.workType3 == 'Cooking' || $scope.workType4 == 'Cooking') {
            requirements.IsCook = true;
        }
        if ($scope.workType1 == 'Baby Sitter' || $scope.workType2 == 'Baby Sitter' || $scope.workType3 == 'Baby Sitter' || $scope.workType4 == 'Baby Sitter') {
            requirements.IsBabySitter = true;
        }
        if ($scope.workType1 == 'Elder / old age Care' || $scope.workType2 == 'Elder / old age Care' || $scope.workType3 == 'Elder / old age Care' || $scope.workType4 == 'Elder / old age Care') {
            requirements.IsElderCare = true;
        }
        $http.post('/api/requirements', requirements).then(function (response) {
           //find user with the same client id
            alert("success");

        }, function (error) {
            alert(error);

        });
    };
});

clientApp.controller('userListCtrl', function ($scope, $http) {
    $http.get('/api/register').then(function (response) {
        $scope.getUserList = response.data;
    });
});
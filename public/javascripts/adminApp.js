var indexApp = angular.module('adminApp', ['ui.router']);
 indexApp.config(function($stateProvider) {
  var maidListState = {
    name: 'maidList',
    url: '/maidList',
    templateUrl: '/templates/maidlist.html',
    controller:'maidListCtrl'
  }

  var addMaidState = {
    name: 'addMaid',
    url: '/addMaid',
    templateUrl: '/templates/addmaid.html',
    contoller:'addMaidCtrl'
  }

  var userListState = {
      name: 'userList',
      url: '/userList',
      templateUrl: '/templates/userlist.html',
      contoller: 'userListCtrl'
  }

  var requirementListState = {
      name: 'requirementList',
      url: '/requirementList',
      templateUrl: '/templates/requirementList.html',
      contoller: 'requirementListCtrl'
  }

  $stateProvider.state(maidListState);
  $stateProvider.state(addMaidState);
  $stateProvider.state(userListState);
  $stateProvider.state(requirementListState);
});

indexApp.controller('maidListCtrl', function ($scope, $http) {
    $http.get('/api/posts').then(function (response) {
        $scope.getall = response.data;
      });
});

indexApp.controller('addMaidCtrl', function ($scope, $http) {
  $http.get('/api/posts').then(function (response) {
    $scope.getall = response.data;
});
  $scope.Insert = function () {
    $http.post('/api/posts', this.input).then(function () {
      alert("success");
    
    }, function (error) {
      alert(error.data);
      
    });
  };
});

indexApp.controller('userListCtrl', function ($scope, $http) {
    $http.get('/api/register').then(function (response) {
        $scope.getUserList = response.data;
    });
});

indexApp.controller('requirementListCtrl', function ($scope, $http) {
    $http.get('/api/requirements').then(function (response) {
        $scope.requirments = response.data;
 
    });


});
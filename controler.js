
var myApp = angular.module('myApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/rh', {templateUrl: 'v_rh.html',   controller: 'RH'}).
      when('/rh/:id', {templateUrl: 'v_rh.html',   controller: 'RH'}).      
      when('/crm',{templateUrl: 'v_crm.html', controller: 'CRM'}).
      when('/auth',{templateUrl: 'v_auth.html', controller: 'AUTH'}).
      otherwise({templateUrl: 'v_auth.html', controller: 'AUTH'});
}]);


myApp.controller('CRM',
function ($scope, $http, $routeParams) {
  
if (localStorage['auth'] == 'crm_ok')  
    {
      $http.get('crm.json').success(function(data) {
      	$scope.needs = data;
      });    
      $scope.needs = [];
    }
else
     {
       window.location.href ='http://cvernet.host-ed.me/CRM/Main.html';
     }  
  });

myApp.controller('RH',
function ($scope, $http, $routeParams) {

if (localStorage['auth'] == 'crm_ok')  
    {
    $http.get('RH.json').success(function(data) {
    	$scope.persons = data;
    });    
     }
     else
     {
       window.location.href ='http://cvernet.host-ed.me/CRM/Main.html';
     }
     
    $scope.persons = [];

    $scope.isSearch = function(person){
  if (person.FIELD1.match($routeParams.id)) 
  {return person};
  };
  
  });

myApp.controller('AUTH',
function ($scope, $http, $routeParams) {
  
$scope.check = function () {  
  if ($scope.user == 'crm' && $scope.password == 'crm')
     {
     localStorage['auth'] = 'crm_ok';
     window.location.href ='./Main.html#/crm';
     }
  else
  $scope.message = 'Vous n\'avez pas les autorisations.';
}  
  
  
  });




var myApp = angular.module('myApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/rh', {templateUrl: 'v_rh.html',   controller: 'RH'}).
      when('/rh/:id', {templateUrl: 'v_rh.html',   controller: 'RH'}).      
      when('/crm',{templateUrl: 'v_crm.html', controller: 'CRM'}).
      otherwise({templateUrl: 'v_crm.html', controller: 'CRM'});
}]);


myApp.controller('CRM',
function ($scope, $http, $routeParams) {
  
$http.get('crm.json').success(function(data) {
	$scope.needs = data;
});    
$scope.needs = [];
  
  });

myApp.controller('RH',
function ($scope, $http, $routeParams) {
  
$http.get('RH.json').success(function(data) {
	$scope.persons = data;
});    
$scope.persons = [];

    $scope.isSearch = function(person){
  if (person.FIELD1.match($routeParams.id)) 
  {return person};
  };
  
  });




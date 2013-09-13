
var myApp = angular.module('myApp', []);

$.fn.editable.defaults.mode = 'inline';

function Ctrl($scope, $http) {
    $scope.due_date = new Date();
    $scope.person_name = "John Doe";
    $scope.address = "133, North Avenue";
    $scope.total = 0;
    
    
    $scope.persons = JSON.parse(typeof localStorage['data'] == "undefined" ? null: localStorage['data']);
    
   if ($scope.persons == null ) {
    
     $http.get('crm.json').success(function(data) {
	$scope.persons = data;
});    

$scope.persons = [];
 
   
  };
  
    $scope.newsal = function(a,b) {
    return parseInt(a) + parseInt(b);
    };                     
    
    $scope.pourc = function(a,b) {
    return Math.round((parseInt(a) / parseInt(b)) * 10000) / 100 ;
    };                     
    
    
    $scope.save = function() {
    localStorage['data'] = JSON.stringify($scope.persons);
    };                                 

  };

  myApp.filter("DoTotal", function() {
  return function(items) {
    var total = 0, i = 0;
    for (i = 0; i < items.length; i++) total += parseInt(items[i].ai);
    return total;
  }
});

myApp.directive('xeditable', function($timeout) {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {
            var loadXeditable = function() {
                angular.element(element).editable({
                    display: function(value, srcData) {
                        ngModel.$setViewValue(value);
                        scope.$apply();
                    }
                });
            }
            $timeout(function() {
                loadXeditable();
            }, 10);
        }
    };
});
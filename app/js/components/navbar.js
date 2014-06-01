angular.module('myWeb.navBar',[])

    .controller('NavBarCtrl', ['$scope', '$location', function($scope, $location){
        $scope.navClass = function(page){
            var currentRoute = $location.path().substring(1) || 'home';
            return page === currentRoute ? 'active' : '';
        };
    }])

    .directive('navBar', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/components/navbar.html'
        };
    });
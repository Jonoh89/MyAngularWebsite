(function() {
    var app = angular.module('myWeb.app',['ngRoute','myWeb.navBar']);

    app.config(['$routeProvider',
        function($routeProvider){
            $routeProvider.
                when("/home", {
                    templateUrl: 'partials/home.html'
                }).
                when("/contact", {
                    templateUrl: 'partials/contact.html'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);
}());

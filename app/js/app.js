(function() {
    var app = angular.module('myWeb.app',['ngRoute','Parse','myWeb.navBar','myWeb.footer','myWeb.contact']);

    app.config(['$routeProvider','ParseProvider',
        function($routeProvider,ParseProvider){
            ParseProvider.initialize("TJrHdCBVzqOxY4IzmbsoeF3Msnf0tmW6JV2XU5bE", "Sg4bNdZa6svFr5EOJaGcs3MMf6ImzUMK7wmGkRxU");

            $routeProvider.
                when("/home", {
                    templateUrl: 'partials/home.html'
                }).
                when("/contact", {
                    templateUrl: 'partials/contact.html'
                }).
                when("/blog", {
                    templateUrl: 'blog/index.html'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);
}());

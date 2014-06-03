angular.module('myWeb.footer',[])

    .directive('myFooter', function(){
        return {
            restrict: 'E',
            templateUrl: 'partials/components/footer.html'
        };
    });
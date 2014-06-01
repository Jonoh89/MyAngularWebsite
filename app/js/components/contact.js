angular.module('myWeb.contact',[])
    .controller('ContactFormCtrl',['$scope', function($scope){
        $scope.form = {};

        this.sendMessage = function(){
            alert(this.form.message);
        };
    }]);

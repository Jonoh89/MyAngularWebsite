angular.module('myWeb.contact',[])
    .factory('Message',function(Parse){
        var Message = angular.copy(Parse.Model);
        Message.configure("Message","message","name","email");
        return Message;
    })

    .controller('ContactFormCtrl',['$scope','Message', function($scope, Message){
        $scope.form = {};

        this.sendMessage = function(){
            var message = new Message({
                name: this.form.name,
                message: this.form.message,
                email: this.form.email
            });

            message.save().then(function(){
                alert('Message saved');
            });
            this.form = {};
        };
    }]);

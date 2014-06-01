angular.module('myWeb.contact',[])
    .factory('Message',function(Parse){
        var Message = angular.copy(Parse.Model);
        Message.configure("Message","message","name","email");
        return Message;
    })

    .controller('ContactFormCtrl',['$scope','Message', function($scope, Message){
        $scope.form = {};
        $scope.sent = false;
        this.sendMessage = function(event){
            var self = this;
            self.sent = false;

            var submitButton = angular.element(event.target).find("button");
            submitButton.button('loading');

            var message = new Message({
                name: this.form.name,
                message: this.form.message,
                email: this.form.email
            });

            message.save().then(function(){
                self.sent = true;
                submitButton.button('reset');
                self.form = {};
                $scope.messageForm.$setPristine();
            });

        };
    }]);

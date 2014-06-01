/*
    Deploy using Parse
    cmd : parse deploy
 */
Parse.Cloud.afterSave("Message", function(request) {
    var Mandrill = require('mandrill');
    Mandrill.initialize('');//get key from Mandrill before deploy (don't want people sending mail and using up the free plan!)

    Mandrill.sendEmail({
        message: {
            text: "Message from: " + request.object.get('email') + "\n" + request.object.get('message'),
            subject: "Message left at jonathanholmlund.co.uk",
            from_email: "parse@cloudcode.com",
            from_name: request.object.get('name') || 'unknown',
            to: [
                {
                    email: "jonoh89@gmail.com",
                    name: "Jonathan"
                }
            ]
        },
        async: true
    },{
        success: function(httpResponse) {
            console.log(httpResponse);
        },
        error: function(httpResponse) {
            console.error(httpResponse);
        }
    });
});
describe('Personal App contact page form', function(){
    var nameInput, emailInput, messageInput, submitButton;

    beforeEach(function(){
        browser.get('app/index.html#/contact');
        nameInput = element(by.model('contactFormCtrl.form.name'));
        emailInput = element(by.model('contactFormCtrl.form.email'));
        messageInput = element(by.textarea('contactFormCtrl.form.message'));
        submitButton = element(by.buttonText('Submit'));
    });

    it('should be on the contact page index.html#/contact', function(){
        browser.getLocationAbsUrl().then(function(url){
            expect(url.split('#')[1]).toBe('/contact');
        });
    });

    it('should have a disabled submit button until form is valid', function(){
        expect(submitButton.getAttribute('disabled')).toBe("true");
        nameInput.sendKeys('Jonathan');
        expect(submitButton.getAttribute('disabled')).toBe("true");
        emailInput.sendKeys('Jonoh89@gmail.com');
        expect(submitButton.getAttribute('disabled')).toBe("true");
        messageInput.sendKeys('A message!');
        expect(submitButton.getAttribute('disabled')).toNotBe("true");
        expect(submitButton.getAttribute('disabled')).toBeNull();//booleans will be "true" or null(false) see: https://github.com/angular/protractor/blob/master/docs/api.md#webdriverwebelementprototypegetattribute
    });

    it('should fail validation if email is not present and display error classes', function(){
        emailInput.sendKeys('jonathan');
        expect(emailInput.getAttribute('value')).toBe('jonathan');
        expect((emailInput).getAttribute('class')).toContain('ng-invalid','ng-dirty');
    });

    it('should fail validation if message is not present and display error classes', function(){
        messageInput.sendKeys('jonathan');
        expect(messageInput.getAttribute('class')).toNotContain('ng-invalid','ng-dirty');
        messageInput.clear();
        expect(messageInput.getAttribute('class')).toContain('ng-invalid','ng-dirty');
    });

    it('should be able to send a message', function(){
        expect($('.alert.alert-success').isDisplayed()).toBeFalsy();
        emailInput.sendKeys('test@email.com');
        messageInput.sendKeys('test message');
        submitButton.click();
        expect($('.alert.alert-success').isDisplayed()).toBeTruthy();
    });
});
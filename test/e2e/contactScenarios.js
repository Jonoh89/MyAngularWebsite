describe('Personal App contact page form', function(){

    beforeEach(function(){
        browser.get('app/index.html?#/contact');
    });

    it('should be on the contact page index.html#/contact', function(){
        browser.getLocationAbsUrl().then(function(url){
            expect(url.split('#')[1]).toBe('/contact');
        });
    });

    it('should fail validation if email is not present', function(){
        var emailInput = element(by.id('inputEmail'));
        emailInput.sendKeys('jonathan');
        expect(emailInput.hasClass('ng-invalid')).toBe(true);
    });
});
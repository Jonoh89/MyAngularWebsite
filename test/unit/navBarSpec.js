describe('Navbar', function(){
    beforeEach(module('myWeb.navBar'));

    describe('NavBarCtrl',function(){
        var scope, rootScope, location, ctrl;
        beforeEach(inject(function($location, $rootScope, $controller) {
            location = $location;
            rootScope = $rootScope;
            scope = $rootScope.$new();
            ctrl = $controller('NavBarCtrl', {$scope:scope});
        }));

        it('should return active if the location matches the path given', function(){
            location.path('/contact');
            rootScope.$apply();
            expect(location.path()).toBe('/contact');

            expect(scope.navClass('contact')).toBe('active');
            expect(scope.navClass('home')).toBe('');

            location.path('/home');
            rootScope.$apply();
            expect(location.path()).toBe('/home');

            expect(scope.navClass('home')).toBe('active');
            expect(scope.navClass('contact')).toBe('');
        });
    });
});
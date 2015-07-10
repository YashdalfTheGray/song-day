/* global angular */

angular.module('songADay', 
    [
        'ui.router',
        'ngMaterial'
    ]
).config([
    '$urlRouterProvider',
    '$stateProvider',
    '$mdThemingProvider',
    function($urlRouterProvider, $stateProvider, $mdThemingProvider) {

        $mdThemingProvider.theme('default')
                          .primaryPalette('blue')
                          .accentPalette('green')
                          .warnPalette('red');
    }
]);
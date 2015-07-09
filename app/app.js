/* global angular */

angular.module('songADay', 
    [
        'ui.router',
        'ngMaterial'
    ]
).config([
    '$urlRouterProvider',
    '$stateProvider',
    '$mdIconProvider',
    '$mdThemingProvider',
    function($urlRouterProvider, $stateProvider, $mdIconProvider, $mdThemingProvider) {

        $mdIconProvider
            .iconSet('action', './assets/action-icons.svg', 24)
            .iconSet('alert', './assets/alert-icons.svg', 24)
            .iconSet('av', './assets/av-icons.svg', 24)
            .iconSet('communication', './assets/communication-icons.svg', 24)
            .iconSet('content', './assets/content-icons.svg', 24)
            .iconSet('device', './assets/device-icons.svg', 24)
            .iconSet('editor', './assets/editor-icons.svg', 24)
            .iconSet('file', './assets/file-icons.svg', 24)
            .iconSet('hardware', './assets/hardware-icons.svg', 24)
            .iconSet('icons', './assets/icons-icons.svg', 24)
            .iconSet('image', './assets/image-icons.svg', 24)
            .iconSet('maps', './assets/maps-icons.svg', 24)
            .iconSet('navigation', './assets/navigation-icons.svg', 24)
            .iconSet('notification', './assets/notification-icons.svg', 24)
            .iconSet('social', './assets/social-icons.svg', 24)
            .iconSet('toggle', './assets/toggle-icons.svg', 24);

        $mdThemingProvider.theme('default')
                          .primaryPalette('blue')
                          .accentPalette('green')
                          .warnPalette('red');
    }
]);
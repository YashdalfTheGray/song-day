/* global angular */

angular.module('songADay', 
        [
                'ui.router',
                'ngAnimate',
                'ngMaterial',
                'ngStorage',
                'firebase'
        ]
).config([
        '$urlRouterProvider',
        '$stateProvider',
        '$mdThemingProvider',
        function($urlRouterProvider, $stateProvider, $mdThemingProvider) {
            $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'homeView/homeView.tpl.html',
                controller: 'HomeViewCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'loginView/loginView.tpl.html',
                controller: 'LoginViewCtrl'
            })
            .state('editsong', {
                url: '/edit/{songId}',
                templateUrl: 'editSongView/editSongView.tpl.html',
                controller: 'EditSongViewCtrl'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'settingsView/settingsView.tpl.html',
                controller: 'SettingsViewCtrl'
            });

            $urlRouterProvider.otherwise('/');
            

                $mdThemingProvider.theme('default')
                    .primaryPalette('blue')
                    .accentPalette('green',{
                        'default': 'A400',
                        'hue-1': 'A700'
                    })
                    .warnPalette('red');
        }
]);
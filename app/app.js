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
            .state('addsong', {
                url: '/add',
                templateUrl: 'addSongView/addSongView.tpl.html',
                controller: 'AddSongViewCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'aboutView/aboutView.tpl.html',
                controller: 'AboutViewCtrl'
            });

            $urlRouterProvider.otherwise('/');
            

                $mdThemingProvider.theme('default')
                    .primaryPalette('blue')
                    .accentPalette('green')
                    .warnPalette('red');
        }
]);
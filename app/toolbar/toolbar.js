/* global angular */

angular.module('songADay')
.controller('ToolbarCtrl', 
    [
        '$scope', '$state',
        function ($scope, $state) {
            $scope.refreshPage = function refreshPage () {
                console.log('Page refreshed!');
            };

            $scope.stateIsHome = function stateIsHome() {
                return $state.is('home');
            };

            $scope.addSong = function addSong() {
                $state.go('addsong');
            };

            $scope.showAbout = function showAbout() {
                $state.go('about');
            };

            $scope.$root.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                if (fromState.name === 'addsong' && toState.name === 'home') {
                    $scope.refreshPage();
                }
            });
        }
    ]
);
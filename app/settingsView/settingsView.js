/* global angular */

angular.module('songADay')
.controller('SettingsViewCtrl', 
    [
        '$scope',
        function ($scope) {
            $scope.enablePlayer = $scope.$root.showYoutubePlayer;

            $scope.onChange = function onChange (state) {
                $scope.$root.showYoutubePlayer = state;
            };
        }
    ]
);
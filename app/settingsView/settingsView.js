/* global angular */

angular.module('songADay')
.controller('SettingsViewCtrl', 
    [
        '$scope', '$localStorage', 
        function ($scope, $localStorage) {
            $scope.$storage = $localStorage;
            $scope.enablePlayer = $scope.$storage.showYoutubePlayer;

            $scope.onChange = function onChange (state) {
                $scope.$storage.showYoutubePlayer = state;
            };
        }
    ]
);
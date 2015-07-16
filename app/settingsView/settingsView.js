/* global angular */

angular.module('songADay')
.controller('SettingsViewCtrl', 
    [
        '$scope', 'songSvc',
        function ($scope, songSvc) {
            $scope.showYoutubePlayer = songSvc.showYoutubePlayer;
        }
    ]
);
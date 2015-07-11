/* global angular */

angular.module('songADay')
.controller('AddSongViewCtrl', 
    [
        '$scope', 'songSvc',
        function ($scope, songSvc) {
            $scope.pageName = 'Add song';
            $scope.addSong = songSvc.addSong;
        }
    ]
);
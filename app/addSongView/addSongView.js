/* global angular */

angular.module('songADay')
.controller('AddSongViewCtrl', 
    [
        '$scope',
        function ($scope) {
            $scope.pageName = 'Add Song';
        }
    ]
);
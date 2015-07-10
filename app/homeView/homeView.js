/* global angular */

angular.module('songADay')
.controller('HomeViewCtrl', 
    [
        '$scope',
        function ($scope) {
            $scope.pageName = 'Home';
        }
    ]
);
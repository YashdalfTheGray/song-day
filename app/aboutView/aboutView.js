/* global angular */

angular.module('songADay')
.controller('AboutViewCtrl', 
    [
        '$scope',
        function ($scope) {
            $scope.pageName = 'About';
        }
    ]
);
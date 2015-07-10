/* global angular */

angular.module('songADay')
.controller('LoginViewCtrl', 
    [
        '$scope',
        function ($scope) {
            $scope.pageName = 'Login';
        }
    ]
);
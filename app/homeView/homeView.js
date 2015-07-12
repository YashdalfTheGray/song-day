/* global angular */

angular.module('songADay')
.controller('HomeViewCtrl', 
    [
        '$scope', '$firebaseArray',
        function ($scope, $firebaseArray) {
            var ref = new Firebase('https://onesongaday.firebaseio.com/songs');
            var songs = $firebaseArray(ref);

            $scope.contentLoaded = false;

            songs.$loaded().then(function (result) {
                $scope.songs = result;
                $scope.contentLoaded = true;
            });

            $scope.formatDate = function formatDate (unixDate) {
                return moment(unixDate, 'X').calendar();
            };
        }
    ]
);
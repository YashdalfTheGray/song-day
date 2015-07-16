/* global angular */

angular.module('songADay')
.controller('HomeViewCtrl', 
    [
        '$scope', '$window', '$firebaseArray', 'songSvc',
        function ($scope, $window, $firebaseArray, songSvc) {
            var ref = new Firebase('https://onesongaday.firebaseio.com/songs');
            var songs = $firebaseArray(ref);

            $scope.contentLoaded = false;
            if ($scope.$root.showYoutubePlayer === undefined) {
                $scope.$root.showYoutubePlayer = true;
            }

            songs.$loaded().then(function (result) {
                $scope.songs = result;
                $scope.contentLoaded = true;
            });

            $scope.formatDate = function formatDate (unixDate) {
                return moment(unixDate, 'X').calendar();
            };

            $scope.externalClick = function externalClick (link) {
                $window.open(link, '_blank');
            };

            $scope.editSongDetails = function editSongDetails() {
                // this is for future implementations
            };

            $scope.getVideoId = function getVideoId (link) {
                return link.slice(-11, link.length);
            };
        }
    ]
);
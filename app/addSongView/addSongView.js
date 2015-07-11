/* global angular */

angular.module('songADay')
.controller('AddSongViewCtrl', 
    [
        '$scope', '$state', '$mdToast', 'songSvc',
        function ($scope, $state, $mdToast, songSvc) {

            $scope.addSong = function (song) {
                songSvc.addSong(song.title, song.artist, song.link);

                $mdToast.show(
                    $mdToast.simple()
                        .content(song.title + ' has been successfully added!')
                        .position('bottom right')
                        .hideDelay(3000)
                );

                $scope.$root.songAdded = true;

                $state.go('home');
            };
        }
    ]
);
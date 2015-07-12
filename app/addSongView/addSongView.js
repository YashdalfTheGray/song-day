/* global angular */

angular.module('songADay')
.controller('AddSongViewCtrl', 
    [
        '$scope', '$state', '$mdToast', 'songSvc',
        function ($scope, $state, $mdToast, songSvc) {

            $scope.addSong = function (song) {
                songSvc.addSong(song);

                $mdToast.show(
                    $mdToast.simple()
                        .content(song.title + ' has been successfully added!')
                        .position('bottom right')
                        .hideDelay(3000)
                );

                $state.go('home');
            };
        }
    ]
);
/* global angular */

angular.module('songADay')
.controller('AddSongViewCtrl', 
    [
        '$scope', '$state', '$mdToast', 'songSvc',
        function ($scope, $state, $mdToast, songSvc) {
            $scope.pageName = 'Add song';
            $scope.addSong = function (songTitle, songArtist, songLink) {
                songSvc.addSong(songTitle, songArtist, songLink);

                $mdToast.show(
                    $mdToast.simple()
                        .content(songTitle + ' has been successfully added!')
                        .position('bottom right')
                        .hideDelay(3000)
                );

                $state.go('home');   
            };
        }
    ]
);
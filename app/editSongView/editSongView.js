/* global angular */

angular.module('songADay')
.controller('EditSongViewCtrl', 
    [
        '$scope', '$state', '$stateParams', '$firebaseObject', '$mdToast', 'songSvc',
        function ($scope, $state, $stateParams, $firebaseObject, $mdToast, songSvc) {
            $scope.contentLoaded = false;

            console.log($stateParams.songId);

            if ($stateParams.songId === undefined || $stateParams.songId === '') {
                $scope.edit = false;
                $scope.contentLoaded = true;
                $scope.buttonTitle = 'Add';
            }
            else {
                var ref = new Firebase('https://onesongaday.firebaseio.com/songs/' + $stateParams.songId);
                $scope.song = $firebaseObject(ref);
                $scope.song.$loaded()
                .then(function (result) {
                    $scope.contentLoaded = true;
                    $scope.edit = true;
                    $scope.buttonTitle = 'Save';
                }, function(error) {
                    $scope.contentLoaded = true;
                    $scope.edit = false;
                    $scope.buttonTitle = 'Add';
                });     
            }

            $scope.commit = function commit(song) {
                if($scope.edit) {
                    saveSong();
                }
                else {
                    addSong(song);
                }
            };

            function saveSong () {
                $scope.song.$save()
                .then(function (result) {
                    $mdToast.show(
                        $mdToast.simple()
                            .content($scope.song.title + ' has been successfully saved!')
                            .position('bottom right')
                            .hideDelay(3000)
                    );

                    $state.go('home');
                });
            }

            function addSong (song) {
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
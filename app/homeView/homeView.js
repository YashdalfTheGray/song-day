/* global angular */

angular.module('songADay')
.controller('HomeViewCtrl', 
    [
        '$scope', '$window', '$firebaseArray', '$mdDialog', 'songSvc',
        function ($scope, $window, $firebaseArray, $mdDialog, songSvc) {
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

            $scope.editSongDetails = function editSongDetails(ev, songObj) {
                $mdDialog.show({
                      controller: EditDialogCtrl,
                      templateUrl: 'homeView/editDialog.tpl.html',
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      locals: {
                         song: _.assign({}, songObj)
                      }
                })
                .then(function (result) {
                    if(result) {
                        songObj.title = result.title;
                        songObj.artist = result.artist;
                        songObj.genre = result.genre;
                        songObj.link = result.link;
                        songs.$save(songObj)
                        .then(function (result) {
                            console.log('Record with id ' + result.key() + ' was saved to Firebase.');
                        });
                    }
                });
                 
                function EditDialogCtrl ($scope, $mdDialog, song) {
                    $scope.song = song;

                    $scope.cancel = function cancelDialog() {
                        $mdDialog.cancel();
                    };

                    $scope.hide = function hideDialog() {
                        $mdDialog.hide();
                    };

                    $scope.saveSong = function SaveSong(song) {
                        $mdDialog.hide(song);
                    };
                }
            };

            $scope.getVideoId = function getVideoId (link) {
                return link.slice(-11, link.length);
            };
        }
    ]
);
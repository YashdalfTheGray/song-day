/* global angular */

angular.module('songADay')
.controller('HomeViewCtrl', 
    [
        '$scope', '$window', '$state', '$firebaseArray', '$mdDialog', '$mdMedia', '$mdToast', 'songSvc',
        function ($scope, $window, $state, $firebaseArray, $mdDialog, $mdMedia, $mdToast, songSvc) {
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
                if($mdMedia('gt-md')) {
                    $mdDialog.show({
                          controller: songSvc.SongDialogController,
                          templateUrl: 'editSongDialog/editSongDialog.tpl.html',
                          parent: angular.element(document.body),
                          targetEvent: ev,
                          locals: {
                             song: _.assign({}, songObj),
                             edit: true
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
                                $mdToast.show(
                                    $mdToast.simple()
                                        .content(songObj.title + ' has been successfully saved!')
                                        .position('bottom right')
                                        .hideDelay(3000)
                                );
                            });
                        }
                    });
                }
                else {
                    $state.go('editsong', { songId: songObj.$id });
                }
            };

            $scope.getVideoId = function getVideoId (link) {
                return link.slice(-11, link.length);
            };
        }
    ]
);
/* global angular */

angular.module('songADay')
.factory('songSvc', 
    [
        '$firebaseArray', '$firebaseAuth', 
        function ($firebaseArray, $firebaseAuth) {
            var ref = new Firebase('https://onesongaday.firebaseio.com/songs');

            this.addSong = function addSong (song) {
                var dateTime = moment().format('X');

                var songToAdd = ref.push();

                // the multiplication by -1 stores songs in reverse chronological order!
                songToAdd.setWithPriority(
                    { 
                        title: song.title,
                        artist: song.artist,
                        genre: song.genre || '',
                        link: song.link || '', 
                        date: dateTime
                    }, 
                    parseInt(dateTime, 10) * -1
                );
            };

            // Find a better place for this
            this.SongDialogController = function AddSongDialogCtrl ($scope, $mdDialog, song, edit) {
                $scope.song = song;
                $scope.edit = edit;

                $scope.buttonTitle = edit ? 'Save' : 'Add';

                $scope.cancel = function cancelDialog() {
                    $mdDialog.cancel();
                };

                $scope.hide = function hideDialog() {
                    $mdDialog.hide();
                };

                $scope.saveSong = function SaveSong(song) {
                    $mdDialog.hide(song);
                };
            };

            return {
                addSong: this.addSong,
                SongDialogController: this.SongDialogController
            };
        }
    ]
);
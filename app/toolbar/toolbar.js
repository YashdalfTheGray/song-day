/* global angular */

angular.module('songADay')
.controller('ToolbarCtrl', 
    [
        '$scope', '$state', '$mdDialog', 'songSvc',
        function ($scope, $state, $mdDialog, songSvc) {
            $scope.stateIs = function stateIs(state) {
                return $state.is(state);
            };

            $scope.goTo = function goToState(state) {
                $state.go(state);
            };

            $scope.addSong = function addSong(ev) {
                $mdDialog.show({
                      controller: AddSongDialogCtrl,
                      templateUrl: 'editSongDialog/editSongDialog.tpl.html',
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      locals: {
                         song: {},
                         edit: false
                      }
                })
                .then(function (result) {
                    if(result) {
                        songSvc.addSong(result);
                    }
                });
                 
                function AddSongDialogCtrl ($scope, $mdDialog, song, edit) {
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
                }
            };
        }
    ]
);
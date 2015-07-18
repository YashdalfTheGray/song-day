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
                      controller: songSvc.SongDialogController,
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
            };
        }
    ]
);
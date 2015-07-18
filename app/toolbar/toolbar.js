/* global angular */

angular.module('songADay')
.controller('ToolbarCtrl', 
    [
        '$scope', '$state', '$mdDialog', '$mdMedia', '$mdToast', 'songSvc',
        function ($scope, $state, $mdDialog, $mdMedia, $mdToast, songSvc) {
            $scope.stateIs = function stateIs(state) {
                    return $state.is(state);
            };

            $scope.goTo = function goToState(state) {
                    $state.go(state);
            };

            $scope.addSong = function addSong(ev) {
                if ($mdMedia('gt-md')) {
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

                            $mdToast.show(
                                $mdToast.simple()
                                    .content(result.title + ' has been successfully added!')
                                    .position('bottom right')
                                    .hideDelay(3000)
                            );
                        }
                    });
                }
                else {
                    $state.go('editsong');
                }
            };
        }
    ]
);
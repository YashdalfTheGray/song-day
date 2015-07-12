/* global angular */

angular.module('songADay')
.controller('ToolbarCtrl', 
    [
        '$scope', '$state',
        function ($scope, $state) {
            $scope.stateIs = function stateIs(state) {
                return $state.is(state);
            };

            $scope.goTo = function goToState(state) {
                $state.go(state);
            };
        }
    ]
);
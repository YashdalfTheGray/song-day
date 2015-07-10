/* global angular */

angular.module('songADay')
.controller('HomeViewCtrl', 
    [
        '$scope', '$firebaseArray',
        function ($scope, $firebaseArray) {
            var ref = new Firebase('https://onesongaday.firebaseio.com/songs');

            var songsArray = $firebaseArray(ref);

            songsArray.$loaded().then(function (result) {
                console.log(result);
            });

            $scope.testData = [
                {
                    date: moment().calendar(),
                    title: 'Test song title 1'
                },
                {
                    date: moment().subtract(1, 'day').calendar(),
                    title: 'Test song title 2'
                },
                {
                    date: moment().subtract(2, 'day').calendar(),
                    title: 'Test song title 3'
                },
                {
                    date: moment().subtract(3, 'day').calendar(),
                    title: 'Test song title 4'
                },
                {
                    date: moment().subtract(4, 'day').calendar(),
                    title: 'Test song title 5'
                },
                {
                    date: moment().subtract(5, 'day').calendar(),
                    title: 'Test song title 6'
                },
                {
                    date: moment().subtract(6, 'day').calendar(),
                    title: 'Test song title 7'
                }
            ];
        }
    ]
);
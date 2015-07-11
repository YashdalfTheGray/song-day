/* global angular */

angular.module('songADay')
.controller('HomeViewCtrl', 
    [
        '$scope', '$firebaseObject',
        function ($scope, $firebaseObject) {
            var ref = new Firebase('https://onesongaday.firebaseio.com/songs');

            var songs = $firebaseObject(ref);

            songs.$loaded().then(function (result) {
                console.log(result);
            });

            $scope.testData = [
                {
                    date: '1436649308',
                    title: 'Test song title 1',
                    artist: 'Some artist',
                    link: 'http://www.google.com'
                },
                {
                    date: '1436562908',
                    title: 'Test song title 2'
                },
                {
                    date: '1436476508',
                    title: 'Test song title 3'
                },
                {
                    date: '1436390108',
                    title: 'Test song title 4'
                },
                {
                    date: '1436303708',
                    title: 'Test song title 5'
                },
                {
                    date: '1436217308',
                    title: 'Test song title 6'
                },
                {
                    date: '1436130908',
                    title: 'Test song title 7'
                }
            ];

            $scope.formatDate = function formatDate (unixDate) {
                return moment(unixDate, 'X').calendar();
            };

        }
    ]
);
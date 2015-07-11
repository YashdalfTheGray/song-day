/* global angular */

angular.module('songADay')
.factory('songSvc', 
    [
        '$firebaseObject', '$firebaseAuth', 
        function ($firebaseObject, $firebaseAuth) {
            var ref = new Firebase('https://onesongaday.firebaseio.com/songs');

            this.addSong = function addSong (song) {
                var dateTime = moment().format('X');

                var songToAdd = ref.push();

                // the multiplication by -1 stores songs in reverse chronological order!
                songToAdd.setWithPriority(
                    { 
                        title: song.title,
                        artist: song.artist,
                        genre: song.genre,
                        link: song.link, 
                        date: dateTime
                    }, 
                    parseInt(dateTime, 10) * -1
                );
            };

            return {
                addSong: this.addSong
            };
        }
    ]
);
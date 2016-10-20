'use strict';

angular.module('robot.manager')
    .service('RobotPlayerService', ['ApplicationService','$http'
        ,function(ApplicationService,$http){

        function _playHand(hand){
            console.log(hand);
            $http({
                method:'GET',
                url:ApplicationService.load().API.URL + '/fingers',
               params:hand
            }).then(function() {
                console.log('ok')
            },function(){
                console.log('KO')
            });
//            "http://10.1.20.117:8081/fingers?major=0&thumb=180&auricular=180&index=180"

        }

        return  {
            playHand:_playHand
        };

    }]);
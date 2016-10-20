'use strict'

angular.module('robot.manager').factory('Step',['Hand',function(Hand) {
    function Step(previoustep)
    {
        this.stepIndex= previoustep ? previoustep.stepIndex + 1: 0;
        this.hand = previoustep ? angular.copy(previoustep.hand,this.hand(currentStep)) : new Hand();
    }

    return function(previoustep){
        return new Step(previoustep);
    }
}]);
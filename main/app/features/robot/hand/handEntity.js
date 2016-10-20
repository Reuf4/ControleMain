'user strict'

angular.module('robot.manager').factory('Hand',[function () {
    function Hand(currentStep){

        this.thumb= currentStep ? currentStep.hand.thumb : 180;
        this.ringfinger= currentStep ? currentStep.hand.ringfinger : 180;
        this.auricular= currentStep ? currentStep.hand.auricular : 180;
        this.index= currentStep ? currentStep.hand.index : 180;
        this.major= currentStep ? currentStep.hand.major : 180;
        /*
        this.thumb = 180;
        this.ringfinger = 180;
        this.auricular = 180;
        this.index = 180;
        this.major = 180;
*/
    }

    return function(){
        return new Hand();

    }

}]);

'user strict'

angular.module('robot.manager')

    .controller('HandCtrl', ['ITLocalStorage','Step','$scope','RobotPlayerService',
        function(ITLocalStorage,Step,$scope,RobotPlayerService) {
            $scope.currentStep = new Step();

            /*
             $scope.currentStep = new Step($scope);
             $scope.previouhand = new Hand();
             console.log($scope.previoustep);
             console.log($scope.previouhand);
             $scope.step = new Step(previoustep,previouhand);
             */
            console.log($scope.currentStep);
            RobotPlayerService.playHand($scope.currentStep.hand);
            $scope.RobotPlayerService = RobotPlayerService;

            //$scope.$watch('currentStep');
          //  $scope.timeout()=2;

        }]);

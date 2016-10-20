/**
 * Created by afu on 19/10/2016.
 */
'use strict';

angular.module('robot.manager')

    .controller('ApiConfigCtrl', ['$scope','ApplicationService',
        function($scope,ApplicationService){

                $scope.appliService = ApplicationService;
                $scope.application = ApplicationService.load();

}]);
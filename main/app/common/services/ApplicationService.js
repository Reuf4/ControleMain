//'use scrict'

angular.module('robot.manager').service('ApplicationService',
    ['ITLocalStorage','Application',function(ITLocalStorage,Application)
    {
        function _load(){
            var application = ITLocalStorage.load();
console.log('afu' + application);
            return application ? application : new Application();
        }
        return {
            load : _load,
        save : ITLocalStorage.save
        };

    }]);
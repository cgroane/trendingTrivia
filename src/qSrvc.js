angular.module('app').service('qSrvc', function($http){
    this.getQuestions = function () {
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions')
    }
})
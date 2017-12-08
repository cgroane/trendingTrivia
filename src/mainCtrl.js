angular.module('app').controller('mainCtrl', function($scope, qSrvc){
    $scope.test = "connected"
    qSrvc.getQuestions().then(response => {
        $scope.questions = response.data
    })
    
})
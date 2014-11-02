'use strict';
var myApp = angular.module('lotofacilApp', []);

//Service - gera um número de 1 a 25
myApp.service('Math', function() {
    this.gerarNumero = function() {
        return Math.ceil(Math.random() * 25);
    };
});


//Controller
myApp.controller('MainCtrl', ['$scope', 'Math', function($scope, Math) {
    $scope.qntd = 1;
    $scope.number = null;
    $scope.result = '';
    $scope.current = true;

    $scope.init = function() {
        $scope.result = [];

        for (var i = 0; i < $scope.qntd; i++) {
            $scope.result.push($scope.gerarJogo());
        }

        $scope.current = false;

        return $scope.result;
    };


    $scope.gerarJogo = function() {
        $scope.jogo = [];

        while ($scope.jogo.length < 15) {
            $scope.number = Math.gerarNumero();

            if ($scope.jogo.indexOf($scope.number) === -1) {
                $scope.jogo.push($scope.number);
            }

        }

        $scope.jogo = $scope.jogo.sort(function(a, b) {
            return a - b;
        });
        return $scope.jogo.join('-');
    };

    $scope.resetar = function() {
        $scope.result = '';
        $scope.qntd = 1;
        $scope.current = true;
    };

}]);

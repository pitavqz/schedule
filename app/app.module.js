(function(){
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            
        ])
        .config([
            '$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'schedule/schedule.html',
                        controller: 'Schedule',
                        controllerAs: 'vm',
                    });
            }
        ]);
})(); 
(function() {console.log('config.js');
    'use strict';
    
    angular
    .module('app')
    .config(Config);
    
    Config.$inject = ['$routeProvider','$stateProvider', '$urlRouterProvider'];//,'$locationProvider'];
    
    function Config($routeProvider,$stateProvider, $urlRouterProvider) {
        //console.log('---COnfig',$routeProvider);
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/dfront/views/inicio.html',
            controller: 'AppController',
            controllerAs: 'vm'
        })
        .state('libro', {
            url: '/libro/:id',
            templateUrl: 'app/leebros/views/libro.html',
            controller: 'LibroController',
            controllerAs: 'vm'
        });
        
        /*
        $routeProvider
        .when("/", {
            templateUrl : 'app/leebros/views/test.html',
            controller: 'AppController',
            controllerAs: 'vm'
        })
        .when("/libro/:id", {
            templateUrl : "app/leebros/views/libro.html",
            controller: 'LibroController',
            controllerAs: 'vm'
        })
        .when("/libreria", {
            templateUrl : "app/leebros/views/libreria.html",
            controller: 'LibreriaController',
            controllerAs: 'vm'
            
        })
        .when("/drag", {
            templateUrl : "app/leebros/views/drag.html",
            controller: 'DragController',
            controllerAs: 'vm'
            
        })
        .otherwise('/');
        */
        
        
        //$locationProvider.html5Mode(true);
    }
    
})();


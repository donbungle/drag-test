(function() {console.log('ColoresController.js');
    'use strict';
    
    angular
    .module('app')
    .controller('ColoresController',ColoresController);
    
    ColoresController.$inject = ['$route', '$scope', 'LibreriaFactory','$stateParams'];
    
    function ColoresController($route,$scope, LibreriaFactory,$stateParams) {
        console.log('ColoresController');
        console.log('$stateParams',$stateParams);
        var vm = this;
        
        
    }
    
})();


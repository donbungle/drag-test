(function() {console.log('appController.js');
    'use strict';
    
    angular
    .module('app')
    .controller('AppController',AppController);
    
    AppController.$inject = ['LibreriaFactory'];
    
    function AppController(LibreriaFactory) {
        console.log('---appController', LibreriaFactory.getLibros());
        var vm = this;
        
        vm.libros = LibreriaFactory.getLibros();
        vm.$onInit = onInit;
        vm.addLike = addLike;
        
        function addLike(id){
            console.log('addLike2', id);
            var _libro = LibreriaFactory.getLibro(id);
            LibreriaFactory.addLike(_libro);
        }
        
        function onInit(){
            console.log('onInit');
            
        }
    }
    
})();


(function() {console.log('libreriaCOntroller.js');
    'use strict';
    
    angular
    .module('app')
    .controller('LibreriaController',LibreriaController);
    
    LibreriaController.$inject = ['LibreriaFactory'];
    
    function LibreriaController(LibreriaFactory) {
        console.log('LibreriaController', LibreriaFactory.getLibros());
        var vm = this;
        
        vm.libros = LibreriaFactory.getLibros();
        
        vm.addLike = addLike;
        
        function addLike(id){
            console.log('addLike2', id);
            var _libro = LibreriaFactory.getLibro(id);
            LibreriaFactory.addLike(_libro);
        }
    }
    
})();


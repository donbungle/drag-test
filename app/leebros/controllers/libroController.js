(function() {console.log('libroController.js');
    'use strict';
    
    angular
    .module('app')
    .controller('LibroController',LibroController);
    
    LibroController.$inject = ['$route', '$scope', 'LibreriaFactory','$stateParams'];
    
    function LibroController($route,$scope, LibreriaFactory,$stateParams) {
        console.log('LibroController',LibreriaFactory.getLibros());
        console.log('$stateParams',$stateParams);
        var vm = this;
        
        var id_libro = 1 * $stateParams.id;
        
        vm.libro = LibreriaFactory.getLibro(id_libro);
        
        vm.addLike = function(){LibreriaFactory.addLike(vm.libro);};
    }
    
})();


(function() {console.log('libroController.js');
    'use strict';
    
    angular
    .module('app')
    .controller('LibroController',LibroController);
    
    LibroController.$inject = ['LibreriaFactory','$timeout'];
    
    function LibroController(LibreriaFactory,$timeout) {
        console.log('---LibroController', LibreriaFactory.getLibros());
        var vm = this;
        vm.cont = 100;
        
        vm.$onInit = onInit;

        vm.addLibro = function(){
            vm.libros.push(
                {id:vm.cont++,nombre:'LOL',ano:2010, likes: 0,labels:['label1','label2','label3','label4','label5','label6']}  
            );
        }

        vm.removeLibro = function(){
            vm.libros.pop();
        }
        
        function onInit(){
            //console.log('onInit');            
            //vm.libros = LibreriaFactory.getLibros();
        }
    }
    
})();


(function() {//console.log('appController.js');
    'use strict';
    
    angular
    .module('app')
    .controller('AppController',AppController);
    
    AppController.$inject = ['LibreriaFactory','$timeout'];
    
    function AppController(LibreriaFactory,$timeout) {
        //console.log('---appController', LibreriaFactory.getLibros());
        var vm = this;
        
        vm.$onInit = onInit;
        vm.cargarLibros = cargarLibros;

        function cargarLibros(){
            LibreriaFactory.getLibros(vm.filtro_titulo, vm.filtro_ano)
            .then(function(response){
                console.log('response',response);
                vm.libros = response.data;//.Object.files;
                //$mdToast.show("Libros cargados");
            },function(error){

            });
        }
        
        function onInit(){
            console.log('AppController onInit');
            //cargarLibros();
            //vm.libros = LibreriaFactory.getLibros();
        }
    }
    
})();


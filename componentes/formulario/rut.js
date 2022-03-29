(function() {//console.log('rut.js');
    'use strict';

    angular
    .module('componentes.formulario')
    .directive('rut', rut);

        function rut() {
            var directive = {
                restrict: 'E',
                replace: true,
                templateUrl: './componentes/formulario/rut.html',
                scope: {
                    placeholder: '@placeholder',
                    modelo: '=ngModel',
                    formato: '@formato'
                },
                link: linkFunc,
                controller: RutController,
                // note: This would be 'ExampleController' (the exported controller name, as string)
                // if referring to a defined controller in its separate file.
                controllerAs: 'vm',
                bindToController: true // because the scope is isolated
            };

            return directive;

            function linkFunc(scope, el, attr, ctrl) {
                
            }
        }

        RutController.$inject = ['$scope'];

        function RutController($scope) {
            // Injecting $scope just for comparison
            var vm = this;
            vm.$onInit = onInit;
            vm.validar = validar;
            vm.es_valido = false;

            function validar(){
                //console.log('validar $scope',$scope);
                //console.log('validar vm',vm);
                if(vm.modelo == ''){
                    vm.es_valido = false;  
                    vm.mensaje = 'El rut no es válido';
                }else{
                    vm.es_valido = true;       
                    vm.mensaje = '';
                }
                
            }
            
            function onInit() {
                
            }
        }
    
})();
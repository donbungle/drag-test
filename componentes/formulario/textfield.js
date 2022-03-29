(function() {//console.log('textfield.js');
    'use strict';

    angular
    .module('componentes.formulario')
    .directive('textfield', textfield);

        function textfield() {
            var directive = {
                restrict: 'E',
                replace: true,
                templateUrl: './componentes/formulario/textfield.html',
                scope: {
                    placeholder: '@placeholder',
                    modelo: '=ngModel',
                    validar: '&validar',
                    mensaje: '@mensaje',
                    mostrar_mensaje: '=mostrarMensaje',
                    label: '@label'
                },
                compile: function(){
                    console.log('compile');
                    return{
                        pre: function(){
                            console.log('compile pre');
                        },
                        post: function(){
                            console.log('compile post');
                        }
                    }
                },
                link: linkFunc,
                controller: TextfieldController,
                controllerAs: 'vm',
                bindToController: true // because the scope is isolated
            };

            return directive;

            function linkFunc(scope, el, attr, ctrl) {
                //console.log('linkFunc');
            }
        }

        TextfieldController.$inject = [];

        function TextfieldController() {
            // Injecting $scope just for comparison
            var vm = this;
            vm.$onInit = onInit;
            vm.es_valido = true;
            vm.mostrar_mensaje = false;
                        
            function onInit() {
                
            }
        }
    
})();
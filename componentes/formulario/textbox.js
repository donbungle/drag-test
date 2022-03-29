(function() {//console.log('textbox.js');
    'use strict';

    angular
    .module('componentes.formulario')
    .directive('textbox', textbox);

        function textbox() {
            var directive = {
                restrict: 'E',
                replace: true,
                templateUrl: './componentes/formulario/textbox.html',
                scope: {
                    placeholder: '@placeholder',
                    modelo: '=ngModel',
                    validar: '&validar',
                    formato: '@formato'
                },
                link: linkFunc,
                controller: TextboxController,
                controllerAs: 'vm',
                bindToController: true // because the scope is isolated
            };

            return directive;

            function linkFunc(scope, el, attr, ctrl) {
                
            }
        }

        TextboxController.$inject = [];

        function TextboxController() {
            
            var vm = this;
            vm.$onInit = onInit;
            
            function onInit() {
                
            }
        }
    
})();
(function() {//console.log('box1.js');
    'use strict';

    angular
    .module('componentes.boxes')
    .directive('box1', box1);
    
        box1.$inject = [];
             
        function box1() {
            //console.log('box1 directive.js');
            var directive = {
                restrict: 'EA',
                replace: true,
                transclude: true,
                templateUrl: './componentes/boxes/box1.html',
                scope: {
                    titulo: '@titulo',
                    classBgHeader: '@classBgHeader',
                    classBgBody: '@classBgBody',
                    contenido: '=contenido'
                },
                link: linkFunc,
                controller: Box1Controller,
                controllerAs: 'vm',
                bindToController: true // because the scope is isolated
            };

            return directive;

            function linkFunc(scope, el, attr, ctrl) {
                
            }
        }

        Box1Controller.$inject = ['$scope', '$filter'];

        function Box1Controller($scope,$filter) {
            // Injecting $scope just for comparison
            var vm = this;
            vm.$onInit = onInit;
            
            //console.log('$scope',$scope);
            

            function onInit() {
                /*var html = '';
                html = $filter('rawHTML')(html);
                vm.contenido = html;
                vm.footer = html;*/
            }
        }
    
})();
(function() {//console.log('autocomplete.js');
    'use strict';

    angular
    .module('componentes.formulario')
    .directive('autocomplete', autocomplete);

        function autocomplete() {
            var directive = {
                restrict: 'E',
                replace: true,
                templateUrl: './componentes/formulario/autocomplete.html',
                scope: {
                    placeholder: '@placeholder',
                    modelo: '=ngModel',
                    lista: '=lista'
                },
                link: linkFunc,
                controller: autocompleteController,
                // note: This would be 'ExampleController' (the exported controller name, as string)
                // if referring to a defined controller in its separate file.
                controllerAs: 'vm',
                bindToController: true // because the scope is isolated
            };

            return directive;

            function linkFunc(scope, el, attr, ctrl) {
                
            }
        }

        autocompleteController.$inject = ['$scope', '$log'];

        function autocompleteController($scope,$log) {
            // Injecting $scope just for comparison
            var vm = this;
            vm.$onInit = onInit;
            
            vm.simulateQuery = false;
            vm.isDisabled    = false;

            // list of `state` value/display objects
            vm.listado_combo = [];
            vm.querySearch   = querySearch;
            vm.selectedItemChange = selectedItemChange;
            vm.searchTextChange   = searchTextChange;

            // ******************************
            // Internal methods
            // ******************************

            /**
             * Search for states... use $timeout to simulate
             * remote dataservice call.
             */
            function querySearch (query) {
                var results = query 
                ? vm.listado_combo.filter(createFilterFor(query)) 
                : vm.listado_combo,
                    deferred;
                if (vm.simulateQuery) {
                    deferred = $q.defer();
                    $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
                    return deferred.promise;
                } else {
                    return results;
                }
            }

            function searchTextChange(text) {
                $log.info('Text changed to ' + text);
            }

            function selectedItemChange(item) {
                //$log.info('Item changed to ' + JSON.stringify(item));
                vm.modelo = item.display;
            }

            /**
             * Build `states` list of key/value pairs
             */
            function loadAll() {
                //$log.warn('lista', vm.lista);

                var lista = vm.lista;

                return _.map(lista,function (item) {
                    return {
                        value: item.toLowerCase(),
                        display: item
                    };
                });
            }

            /**
             * Create filter function for a query string
             */
            function createFilterFor(query) {
                var lowercaseQuery = query.toLowerCase();
                return function filterFn(state) {
                    //return _.some(myArray, _.method('includes', 'orange'));
                    //console.log("_.some(myArray, _.method('includes', lowercaseQuery))",_.some(state.value, _.method('includes', lowercaseQuery)));
                    //return _.some(state.value, _.method('includes', lowercaseQuery));
                    return (state.value.indexOf(lowercaseQuery) >= 0);
                };
            }
            
            function onInit() {
                
            }

            $scope.$watch('vm.lista', function(current, original) {
                $log.info('vm.lista was %s', original);
                $log.info('vm.lista is now %s', current);
                if(current != undefined && current != original){
                    vm.listado_combo = loadAll();
                }
            });
        }
    
})();
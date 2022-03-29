/**
 * @desc order directive that is specific to the order module at a company named Acme
 * @example <div acme-order-calendar-range></div>
 */
(function() {
    'use strict';

    angular
    .module('componentes')
    .directive('indicador1', indicador1);

    function indicador1() {
        console.log('indicador1');
        var directive = {
            restrict: 'E',
            //templateUrl: 'app/feature/example.directive.html',
            template: '<h1>HOLA MUNDO</h1>',
            scope: {
                max: '='
            },
            link: linkFunc,
            controller: indicador1Controller,
            // note: This would be 'ExampleController' (the exported controller name, as string)
            // if referring to a defined controller in its separate file.
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
            console.log('LINK: scope.min = %s *** should be undefined', scope.min);
            console.log('LINK: scope.max = %s *** should be undefined', scope.max);
            console.log('LINK: scope.vm.min = %s', scope.vm.min);
            console.log('LINK: scope.vm.max = %s', scope.vm.max);
        }
    }

    indicador1Controller.$inject = ['$scope'];

    function indicador1Controller($scope) {
        // Injecting $scope just for comparison
        var vm = this;
        vm.min = 3;
        vm.$onInit = onInit;

        //////////

        console.log('CTRL: $scope.vm.min = %s', $scope.vm.min);
        console.log('CTRL: $scope.vm.max = %s', $scope.vm.max); // undefined in Angular 1.5+
        console.log('CTRL: vm.min = %s', vm.min);
        console.log('CTRL: vm.max = %s', vm.max); // undefined in Angular 1.5+

        // Angular 1.5+ does not bind attributes until calling $onInit();
        function onInit() {
            console.log('CTRL-onInit: $scope.vm.min = %s', $scope.vm.min);
            console.log('CTRL-onInit: $scope.vm.max = %s', $scope.vm.max);
            console.log('CTRL-onInit: vm.min = %s', vm.min);
            console.log('CTRL-onInit: vm.max = %s', vm.max);
        }
    }
})();

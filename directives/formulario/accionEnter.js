(function() {//console.log('accionEnter.js');
    'use strict';

    angular
    .module('directivas.formulario')
    .directive('accionEnter', accionEnter);
    
        accionEnter.$inject = [];
             
        function accionEnter() {
            //console.log('accionEnter directive.js');
            var directive = {
                restrict: 'A',
                link: linkFunc
            };

            return directive;

            function linkFunc(scope, el, attr, ctrl) {
                el.bind("keydown keypress", function (event) {
                    if(event.which === 13) {
                        scope.$apply(function (){
                            scope.$eval(attr.accionEnter);
                        }); 
        
                        event.preventDefault();
                    }
                });
            }
        }
    
})();
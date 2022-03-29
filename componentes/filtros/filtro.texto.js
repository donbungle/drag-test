(function() {//console.log('filtro.texto.js');
    'use strict';

    angular
    .module('componentes.filtros')
    .filter('rawHTML', function($sce) {

        return function(val) {
            return $sce.trustAsHtml(val);

        };

    })
    .filter('XD', function() {

        return function(val) {
            return 'XD';

        };

    })
    .filter('esVacio', function() {

        return function(val) {
            return val == '';

        };

    });
})();
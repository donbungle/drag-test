(function() {
    'use strict';

    angular
    .module('app')
    .factory('LibreriaFactory', LibreriaFactory);

     LibreriaFactory.$inject = ['$q','$timeout', '$http'];
    
    function LibreriaFactory($q, $timeout, $http) {
        //console.log('---LibreriaFactory');
        
        var service = {
            addLike: addLike,
            removeLike: removeLike,
            getLibros: getLibros,
            getLibro: getLibro
        };
        return service;
        
        function getLibros(titulo, ano){
            //return libros;
            return $http({
                url: 'http://localhost:5000/',  
                method: "GET",
                params: {titulo: titulo, ano: ano}
            });

            
        }
        
        function getLibro(id){
            return _.find(libros,{'id':id});
        }
        
        
        function addLike(libro) {
            libro.likes++;      
        };
        
        function removeLike(id) {
            _.find(libros,{'id':id}).likes--;
        };

    }
    
})();


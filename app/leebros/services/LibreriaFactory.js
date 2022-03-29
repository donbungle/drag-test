(function() {
    'use strict';

    angular
    .module('app')
    .factory('LibreriaFactory', LibreriaFactory);

     LibreriaFactory.$inject = [];
    
    function LibreriaFactory(Libro) {
        console.log('---LibreriaFactory');
        
        var libros = [
            {id:1,nombre:'Aaaaaa',ano:2010, likes: 0,labels:['label1','label2','label3','label4','label5','label6']},
            {id:2,nombre:'Bbbbbb',ano:2011, likes: 0,labels:['label1','label2','label5','label6']},
            {id:4,nombre:'Dddd',ano:2017, likes: 0,labels:['label3','label4','label5']},
            {id:6,nombre:'Eeeeeee',ano:2010, likes: 0,labels:['label1','label2','label3','label5','label6']},
            {id:7,nombre:'Ggggggg',ano:1999, likes: 0,labels:['label1','label3','label44','label6']},
            {id:8,nombre:'Hhhhhh',ano:1970, likes: 0,labels:['label1','label23','label4','label54','label61']},
            {id:12,nombre:'Kkkkkk',ano:1877, likes: 0,labels:['label11','label43','label4','label58','label64']},
        ];
        
        var service = {
            addLike: addLike,
            removeLike: removeLike,
            getLibros: getLibros,
            getLibro: getLibro
        };
        return service;

        
        function getLibros(){
            return libros;
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


(function() {console.log('animacion.js');
    'use strict';
    
    angular
    .module('app')
    .animation('.panel',animacion);
    
    animacion.$inject = [];
    
    function animacion() {
        
        return {
            enter: function(element, done) {
                console.log('enter element',element);
                console.log('enter done',done);
                $(window).scrollTop( 0 );
                $(element).fadeIn(500);
                //$(element).addClass('animated bounceInLeft');
                //$(element).addClass('animated slideInLeft');
                //$(element).addClass('animated fadeIn');
            },
            leave: function(element, done) { 
                console.log('leave element',element);
                console.log('leave done',done);
                $(element).fadeOut(100);
                //$(element).addClass('animated bounceOutRight');
                //$(element).addClass('animated slideOutRight');
                //$(element).addClass('animated fadeOut');
            }
          };
    }
    
})();
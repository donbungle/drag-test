(function() {console.log('animacion.js');
    'use strict';
    
    angular
    .module('app')
    .animation('.test_animacion',animacion);
    
    animacion.$inject = [];
    
    function animacion() {
        //console.log('test_animacion');
        return {
            enter: function(element, done) {
                //console.log('enter');
              // Initialize the element's opacity
              element.css('opacity', 0);
        
              // Animate the element's opacity
              // (`element.animate()` is provided by jQuery)
              element.animate({opacity: 1}, done);
        
              // Optional `onDone`/`onCancel` callback function
              // to handle any post-animation cleanup operations
              return function(isCancelled) {
                if (isCancelled) {
                  // Abort the animation if cancelled
                  // (`element.stop()` is provided by jQuery)
                  element.stop();
                }
              };
            },
            leave: function(element, done) {
                //console.log('leave');
              // Initialize the element's opacity
              element.css('opacity', 1);
        
              // Animate the element's opacity
              // (`element.animate()` is provided by jQuery)
              element.animate({opacity: 0}, done);
        
              // Optional `onDone`/`onCancel` callback function
              // to handle any post-animation cleanup operations
              return function(isCancelled) {
                if (isCancelled) {
                  // Abort the animation if cancelled
                  // (`element.stop()` is provided by jQuery)
                  element.stop();
                }
              };
            }
          };
    }
    
})();
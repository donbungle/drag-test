(function() {console.log('DragController.js');
    'use strict';
    
    angular
    .module('app')
    .controller('DragController',DragController);
    
    DragController.$inject = ['$scope', 'dragulaService'];
    
    function DragController($scope,dragulaService) {
        console.log('DragController');
        var vm = this;
        //vm.codigo = '<h1>Hola</h1>';
        dragulaService.options($scope,'bag-left',{
            isContainer: function (el) {
                console.log('isContainer el',el);
                return el.classList.contains('contenido');//return false; // only elements in drake.containers will be taken into account
            },
            moves: function (el, source, handle, sibling) {
                //console.log('moves el',el);
                return true; // elements are always draggable by default
            },
            accepts: function (el, target, source, sibling) {
              //console.log('accepts el',el);
                return true; // elements can be dropped in any of the `containers` by default
            },
            invalid: function (el, handle) {
              //console.log('invalid el',el);
                return false; // don't prevent any drags from initiating by default
            },
            direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
            copy: true,                       // elements are moved by default, not copied
            copySortSource: false,             // elements in copy-source containers can be reordered
            revertOnSpill: true,              // spilling will put the element back where it was dragged from, if this is true
            removeOnSpill: true,              // spilling will `.remove` the element, if this is true
            mirrorContainer: document.body,    // set the element that gets mirror elements appended
            ignoreInputTextSelection: false     // allows users to select input text, see details below
        });
        vm.i = 1;
        $scope.$on('bag-left.drop',function(e,el){
            //console.log('bag-left.drop');
            //console.log('e',e);
            //console.log('el',el);
            //console.log('this',this);
            //console.log('$scope',$scope);
            //el.find('.contenido').attr('dragula','bag-inner');
            //el.css('color','red');
            el.removeClass('gu-transit');
            //el.html('<h1>REPLACED</h1>');
            //$('#codigo').find('[ng-transclude]').removeAttr('ng-transclude');
            $('#codigo').find('.contenido, .content').removeAttr('ng-transclude');
            
            var html = $('#codigo').html();
            $scope.vm.codigo = html;
            var temp_json = himalaya.parse(html);
            var result_json = [];
            
            angular.forEach(temp_json, function(o,i){
                if(o.type == "element"){
                    console.log('elem',o.children);  
                    angular.forEach(o.children, function(o2,i2){

                    });
                    result_json.push(o);
                }
            });
            $scope.vm.json = result_json;
            
            $scope.$digest();
            //console.log('dragulaService',dragulaService.find($scope, 'bag-left'));
            //dragulaService.add(e.targetScope.$parent,'bag-inner',{copy:true});
        });
        
        $scope.$watch('vm.json',function(newValue,oldValue){
            //console.log('oldValue',oldValue);
            //console.log('newValue',newValue);
            //console.log('newValue==oldValue',newValue==oldValue);
            //console.log('newValue===oldValue',newValue===oldValue);
            //console.log('_.isEqual(newValue,oldValue)',_.isEqual(newValue,oldValue));
            
            if(!(_.isEqual(newValue,oldValue))){
                
            }
        })
        
    }
    
})();


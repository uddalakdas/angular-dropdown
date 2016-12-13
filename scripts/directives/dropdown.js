'use strict';
angular.module('angularDropdownApp')
  .directive('dropdown', function () {
    return {
      templateUrl: 'views/dropdown.html',
      restrict: 'E',	
      replace: true,
      scope: {
      	dvlist: "=",
      	selected: "="
       },
      link: function($scope, element, attrs) {	
      	$scope.selected = "Select Driver to pair";
      	$scope.$watch('selected',function(){
      		if($scope.selected != "Select Driver to pair")
      		$(element).find('#search-btn').css("background","#d9e5f9");
      	})
      }
      
    };
  })
  .directive('optionContent',function($compile,$templateRequest){
    	return {
    		templateUrl: 'views/dropdown-option.html',
    		restrict: 'EA',
    		replace: true,
    		scope:false,
    		link: function($scope,element,attrs,parentCtrl){
    			$(element).css("background","#d9e5f9");
    			$(element).css("color","#000000")
    			$scope.itemSelected = function(item){
       					$scope.$parent.selected = (item.driver ? item.driver.name : '-')+"/"+(item.vehicle ? item.vehicle.id : '-');			
    			}
      			$templateRequest("views/popup.html").then(function(html){
      				var compliledContent = $compile(html)($scope);
					$('.popover').css("background","#143363");
					$('.popover').css("color","#ffffff");
					$(element).popover({
      					html: true,
      					content: compliledContent,
                container: 'body'
      				});
   				});
        	$(element).mouseenter(function(){
      				$(element).css("background","#143363")
      				$(element).css("color","#ffffff")
      				$(element).popover('show');
      			}).mouseleave(function(){
      				$(this).css("background","#d9e5f9")
      				$(this).css("color","#000000")
      				$(element).popover('hide');
      			});
    		}
    	};
  });

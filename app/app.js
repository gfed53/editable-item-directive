angular.module('myApp', [])

.directive('makeEditable', function(){
	return {
		restrict: 'A',
		templateUrl: 'editable.html',
		scope: true,
		transclude: true,
		link: function(scope, element, attrs){
			var text = element.find('p')[0],
			button = element.find('input')[0];
			scope.toggleEdit = function(){
				if(text.getAttribute("contenteditable")==="false"){
					text.setAttribute("contenteditable", "true");
					text.style.color = "red";
					button.setAttribute("value", "Save");
				} else {
					text.setAttribute("contenteditable", "false");
					text.style.color = "black";
					button.setAttribute("value", "Edit");
				}
				console.log(text);
				// console.log(text.getAttribute("contenteditable"));
			};
		},
	}
})
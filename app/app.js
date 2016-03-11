angular.module('myApp', [])

.directive('makeEditable', function(){
	return {
		restrict: 'A',
		templateUrl: 'editable.html'
	}
})
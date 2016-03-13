describe('makeEditable', function(){
	var scope,
	content,
	element,
	html,
	compiled;

	beforeEach(module('myApp'));
	beforeEach(module('editable.html'));
	beforeEach(inject(function($rootScope, $compile){
		scope = $rootScope.$new();
		content = "Some text here";
		html = "<div make-editable>"+content+"</div>";
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();
	}));

	it("should check to see if transclusion worked.", function(){
			expect(element.find('p').text()).toContain(content);

	});

	it("should toggle contenteditable on ng-click", function(){
			expect(element.find('p').attr('contenteditable')).toBeTruthy();
			expect(element.find('input').attr('ng-click')).toBeTruthy();

	});

});
'use strict'

module.exports = function(foo) {
	console.log('INSIDE');
	console.log('first = ', foo.one);
	console.log('second = ', foo.two);

	foo.one = 'gamma';
	foo.two = 'delta';
	
	return {
		one:foo.one,
		two:foo.two
	};
};

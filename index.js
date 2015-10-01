'use strict'
/*
 * wls-example
*/

module.exports = function(foo) {
	console.log('INSIDE');
	console.log('first = ', foo.one);
	console.log('second = ', foo.two);

	foo.one = 'gamma';
	foo.two = 'delta';

	var wls_func = function(req, res, next) {
		console.log('WLS_FUNC - ', req);
		res.json({display: 'WLS_FUNC'});
	};

	return {
		one:foo.one,
		two:foo.two,
		wls_func: wls_func
	};
};

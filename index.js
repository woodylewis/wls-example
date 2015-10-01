'use strict'
/*
 * wls-example
*/

var Promise = require('bluebird'),
	request = Promise.promisify(require('request'));

module.exports = function(foo) {
	console.log('INSIDE');
	console.log('first = ', foo.one);
	console.log('second = ', foo.two);

	foo.one = 'gamma';
	foo.two = 'delta';

	function ClientError(e) {
		return e.code;
	}

	var wls_func = function(req, res, next) {
		console.log('WLS_FUNC');
		request('http://woodylewis.net') 
		.then(function(contents) {
			res.json({body: contents});
		})
		.catch(ClientError, function(e) {
			console.log('ERROR - ', e);
		});
	};

	return {
		one:foo.one,
		two:foo.two,
		wls_func: wls_func
	};
};

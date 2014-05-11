/* global describe, it, expect, document */
'use strict';

var parse = require('./index');

describe('parser', function(){
	it('should parse', function(){
		var html = '<div id="1"> <div id="2"> <div id="3"></div> <div id="5"></div> </div> <div id="6"></div> </div>',
			stub = document.createElement('div');

		stub.appendChild(parse(html));
		expect(stub.innerHTML).toBe(html);
	});

});

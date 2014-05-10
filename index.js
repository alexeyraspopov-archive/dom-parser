'use strict';

var parser = new DOMParser();

module.exports = function(html){
	var fragment = document.createDocumentFragment(),
		doc = parser.parseFromString(html, 'text/html');

	[].slice.call(doc.body.children).forEach(fragment.appendChild, fragment);

	return fragment;
};

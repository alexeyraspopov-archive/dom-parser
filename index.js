'use strict';

var parser = new DOMParser();

function parseShim(html){
	var doc = document.implementation.createHTMLDocument('');

	doc.body.innerHTML = html;

	return doc;
}

function parse(html){
	return parser.parseFromString(html, 'text/html') || parseShim(html);
}

module.exports = function(html){
	var fragment = document.createDocumentFragment(),
		doc = parse(html);

	[].slice.call(doc.body.childNodes)
		.forEach(fragment.appendChild, fragment);

	return fragment;
};

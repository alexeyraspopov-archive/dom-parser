'use strict';

var parser = new DOMParser(),
	clean = document.implementation.createHTMLDocument('');

function parseShim(html){
	clean.body.innerHTML = html;
	return clean;
}

function parse(html){
	return parser.parseFromString(html, 'text/html') || parseShim(html);
}

module.exports = function(html){
	var fragment = document.createDocumentFragment(),
		doc = parse(html),
		body = doc.body;

	while(body.firstChild){
		fragment.appendChild(body.firstChild);
	}

	return fragment;
};

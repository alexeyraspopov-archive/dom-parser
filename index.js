'use strict';

var parser = new DOMParser();

function parseShim(html){
	var clean = document.implementation.createHTMLDocument('');
	clean.body.innerHTML = html;
	return clean;
}

function parse(html){
	return parser.parseFromString(html, 'text/html') || parseShim(html);
}

module.exports = function(html){
	var fragment = document.createDocumentFragment(),
		body = parse(html).body;

	while(body.firstChild){
		fragment.appendChild(body.firstChild);
	}

	return fragment;
};

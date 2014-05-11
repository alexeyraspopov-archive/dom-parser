# dom-parser

DOM Parser based on [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)

## Install

```bash
$ component install alexeyraspopov/dom-parser
```

```bash
$ bower install dom-parser
```

## API

	parse(html)

Returns [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) with parsed HTML content.

 * `html` - just html code that you want to parse

## Usage

```javascript
var template = parse('<div id="boo"></div>');

document.body.appendChild(template);
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov

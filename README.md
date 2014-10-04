# nodejs-api

[![Build Status](https://travis-ci.org/crissdev/nodejs-api.png?branch=master)](https://travis-ci.org/crissdev/nodejs-api)

> Expose node.js modules through an object


## Install

```sh
$ npm install --save node-api
```

## Usage

```js
var nodes = require('nodejs-api');
nodes.console.log('hello'); // will print hello
```

See all modules available:

```js
console.log(Object.keys(require('nodejs-api')));
```

## LICENSE

MIT © [Cristian Trifan](http://crissdev.com)

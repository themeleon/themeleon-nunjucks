Themeleon Nunjucks
==============

> [Nunjucks] mixin for [Themeleon].

**Warning:** this repository/package is deprecated, template engines
will be handled by consolidate.js in Themeleon 3.0.

[Nunjucks]: http://mozilla.github.io/nunjucks
[Themeleon]: https://github.com/themeleon/themeleon

Installation
------------

In your `package.json`:

```json
{
  "dependencies": {
    "themeleon": "1.*",
    "themeleon-nunjucks": "1.*"
  }
}
```

Usage
-----

```js
var themeleon = require('themeleon')();

// Use the Nunjucks mixin
themeleon.use('nunjucks');

// Or inject your own instance
themeleon.use('nunjucks', require('nunjucks'));

module.exports = themeleon(__dirname, function (t) {
  // Configure Nunjucks views basePath and options.
  // See https://mozilla.github.io/nunjucks/api.html#configure
  t.nunjucks.configure('views', options);
  // Compile a Nunjucks view as `index.html` in destination directory
  t.nunjucks('index.html', 'dist/index.html');
});
```

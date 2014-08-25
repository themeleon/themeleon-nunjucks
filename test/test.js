'use strict';

var fs = require('fs');
var path = require('path');
var test = require('tape');
var themeleon = require('themeleon')();
var nunjucks = require('../');

themeleon.use(nunjucks);

var context = {
  pageTitle: 'Hello'
};

var theme = themeleon(__dirname, function (t) {
  t.nunjucks.configure('test');
  t.nunjucks('fixture/index.tpl.html', 'index.html');
});

test('themeleon-nunjucks', function (assert) {
  assert.plan(2);

  function end () {
    var expected = fs.readFileSync(path.join(__dirname, 'fixture/index.html'), 'utf8');
    var input = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

    assert.ok(
      fs.existsSync(path.join(__dirname, 'index.html')),
      'Should create a `index.html` file'
    );

    assert.equal(input, expected);
  }

  theme(__dirname, context)
    .then(end)
    .done();

});

'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var <%= camelPluginName %> = require('./index');

it('should ', function (cb) {
	var stream = <%= camelPluginName %>();

	stream.on('data', function (file) {
		assert.equal(file.relative, 'file.ext');
		assert.equal(file.contents.toString(), 'unicorns');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		base: __dirname,
		path: __dirname + '/file.ext',
		contents: new Buffer('unicorns')
	}));

	stream.end();
});

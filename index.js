'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var someModule = require('some-module');

module.exports = function (options) {
	if (!options.foo) {
		throw new gutil.PluginError('gulp-<%= pluginName %>', '`foo` required');
	}

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-<%= pluginName %>', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(someModule(file.contents.toString(), options));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-<%= pluginName %>', err));
		}

		cb();
	});
};

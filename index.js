'use strict';
const through = require('through2');
const PluginError = require('plugin-error');
const someModule = require('some-module');

module.exports = options => {
	options = options || {};

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-<%= pluginName %>', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = Buffer.from(someModule(file.contents.toString(), options));
			this.push(file);
		} catch (err) {
			this.emit('error', new PluginError('gulp-<%= pluginName %>', err));
		}

		cb();
	});
};

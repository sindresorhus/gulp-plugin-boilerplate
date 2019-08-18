'use strict';
const through = require('through2');
const PluginError = require('plugin-error');
const someModule = require('some-module');

module.exports = (options = {}) => {
	return through.obj(function (file, encoding, callback) {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new PluginError('gulp-<%= pluginName %>', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = Buffer.from(someModule(file.contents.toString(), options));
			this.push(file);
		} catch (error) {
			this.emit('error', new PluginError('gulp-<%= pluginName %>', error));
		}

		callback();
	});
};

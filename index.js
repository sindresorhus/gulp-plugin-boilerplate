import {Buffer} from 'node:buffer';
import {gulpPlugin} from 'gulp-plugin-extras';

export default function gulpPluginName() {
	return gulpPlugin('gulp-<%= pluginName %>', file => {
		file.contents = Buffer.concat([Buffer.from('Hello'), file.contents]);
		return file;
	});
}

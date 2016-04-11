# gulp-<%= pluginName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/gulp-<%= pluginName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/gulp-<%= pluginName %>)

> My <%= superb %> gulp plugin


## Install

```
$ npm install --save-dev gulp-<%= pluginName %>
```


## Usage

```js
const gulp = require('gulp');
const <%= camelPluginName %> = require('gulp-<%= pluginName %>');

gulp.task('default', () => {
	gulp.src('src/file.ext')
		.pipe(<%= camelPluginName %>())
		.pipe(gulp.dest('dist'))
);
```


## API

### <%= camelPluginName %>([options])

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [<%= name %>](<%= website %>)

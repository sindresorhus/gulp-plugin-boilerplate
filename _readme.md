# [gulp](http://gulpjs.com)-<%= pluginName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/gulp-<%= pluginName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/gulp-<%= pluginName %>)

> Lorem ipsum


## Install

```sh
$ npm install --save-dev gulp-<%= pluginName %>
```


## Usage

```js
var gulp = require('gulp');
var <%= camelPluginName %> = require('gulp-<%= pluginName %>');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(<%= camelPluginName %>())
		.pipe(gulp.dest('dist'));
});
```


## API

### <%= camelPluginName %>(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [<%= name %>](https://github.com/<%= githubUsername %>)

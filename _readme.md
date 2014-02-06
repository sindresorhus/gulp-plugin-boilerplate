# [gulp](http://gulpjs.com)-<%= pluginName %> [![Build Status](https://secure.travis-ci.org/<%= githubUsername %>/gulp-<%= pluginName %>.png?branch=master)](http://travis-ci.org/<%= githubUsername %>/gulp-<%= pluginName %>)

> Lorem ipsum


## Install

```
npm install --save-dev gulp-<%= pluginName %>
```


## Example

```js
var gulp = require('gulp');
var <%= camelPluginName %> = require('gulp-<%= pluginName %>');

gulp.task('default', function () {
	gulp.src('src/app.ext')
		.pipe(<%= camelPluginName %>())
		.pipe(gulp.dest('dist'));
});
```


## API

### <%= camelPluginName %>(options)

#### options

##### foo

Type: `Boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [<%= name %>](https://github.com/<%= githubUsername %>)

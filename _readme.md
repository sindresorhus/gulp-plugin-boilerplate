# gulp-<%= pluginName %>

> My <%= superb %> gulp plugin

## Install

```
$ npm install --save-dev gulp-<%= pluginName %>
```

## Usage

```js
const gulp = require('gulp');
const <%= camelPluginName %> = require('gulp-<%= pluginName %>');

export.default = () => (
	gulp.src('src/file.ext')
		.pipe(<%= camelPluginName %>())
		.pipe(gulp.dest('dist'))
);
```

## API

### <%= camelPluginName %>(options?)

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.

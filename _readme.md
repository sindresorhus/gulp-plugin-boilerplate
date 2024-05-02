# gulp-<%= pluginName %>

> My <%= superb %> gulp plugin

## Install

```sh
npm install --save-dev gulp-<%= pluginName %>
```

## Usage

```js
import gulp from 'gulp';
import <%= camelPluginName %> from 'gulp-<%= pluginName %>';

export default () => (
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

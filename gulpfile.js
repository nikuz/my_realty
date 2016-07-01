'use strict';

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  fs = require('fs'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config.js'),
  eslint = require('gulp-eslint'),
  clean = require('gulp-clean'),
  zip = require('gulp-zip');
  // Karma = require('karma').Server;

gulp.task('webpack:build', ['build:clean'], function(done) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(myConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack:build', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    done();
  });
});

gulp.task('build:clean', function() {
  return gulp.src('./release', {read: false}).pipe(clean({force: true}));
});

gulp.task('copy:manifest', ['build:clean'], function(done) {
  var manifestFile = 'manifest.json',
    releaseFolder = 'release',
    manifest = require(`./${manifestFile}`),
    version = manifest.version.split('.');

  try {
    fs.accessSync(`./${releaseFolder}`);
  } catch(e) {
    fs.mkdirSync(`./${releaseFolder}`);
  }

  version.forEach(function(value, key) {
    version[key] = parseInt(value, 10);
  });

  version[2] += 1;
  if (version[2] > 9) {
    version[2] = 0;
    version[1] += 1;
  }
  if (version[1] > 9) {
    version[1] = 0;
    version[0] += 1;
  }

  manifest.version = version.join('.');

  fs.writeFileSync(`./${manifestFile}`, JSON.stringify(manifest, null, 2));
  fs.writeFileSync(`./${releaseFolder}/${manifestFile}`, JSON.stringify(manifest, null, 2));
  done();
});

gulp.task('copy:manifest-dev', function() {
  return gulp.src(['./manifest.json']).pipe(gulp.dest('release'));
});

gulp.task('copy:images', ['build:clean'], function() {
  return gulp.src(['./app/images/**/*']).pipe(gulp.dest('release/images'));
});
gulp.task('copy:images-dev', function() {
  return gulp.src(['./app/images/**/*']).pipe(gulp.dest('release/images'));
});

gulp.task('copy:locales', ['build:clean'], function() {
  return gulp.src(['./_locales/**/*']).pipe(gulp.dest('release/_locales'));
});
gulp.task('copy:locales-dev', function() {
  return gulp.src(['./_locales/**/*']).pipe(gulp.dest('release/_locales'));
});

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = 'sourcemap';
myDevConfig.debug = true;

var devCompiler = webpack(myDevConfig);

gulp.task('webpack:build-dev', function(callback) {
  return devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError('webpack:build-dev', err);
    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('build-dev', function() {
  return gulp.watch(['app/**/*', '_locales/**/*'], ['webpack:build-dev']);
});

gulp.task('remove:extrafonts', ['webpack:build'], function() {
  return gulp.src([
    'release/*.eot',
    'release/*.woff',
    'release/*.ttf',
    'release/*.svg'
  ], {read: false}).pipe(clean({force: true}));
});

gulp.task('build:compress', ['copy:manifest', 'copy:images', 'remove:extrafonts'], function() {
  var manifest = require('./release/manifest.json'),
    buildName = manifest.short_name.replace(/\s/g, '_') + '_' + manifest.version;

  return gulp.src('release/**/*')
    .pipe(zip(`${buildName}.zip`))
    .pipe(gulp.dest('release'))
    .pipe(gulp.dest('store_resources'));
});

gulp.task('eslint', function () {
  return gulp.src([
      'app/**/*.js',
      'app/**/*.jsx'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build', [
  'build:clean',
  'webpack:build',
  'copy:manifest',
  'copy:images',
  'copy:locales',
  'remove:extrafonts',
  'build:compress'
]);

gulp.task('default', [
  'copy:manifest-dev',
  'copy:images-dev',
  'copy:locales-dev',
  'webpack:build-dev',
  'build-dev'
]);

// gulp.task('test', function(done) {
//   new Karma({
//     configFile: __dirname + '/tests/karma.conf.js',
//     singleRun: true
//   }, done).start();
// });

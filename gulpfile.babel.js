const gulp = require('gulp')
const blok = require('gulp-blok')
const watch = require('gulp-watch')
const less = require('gulp-less')
const browserSync = require('browser-sync')
const source = require('vinyl-source-stream')
const browserify = require('browserify')
const reload = browserSync.reload
const config = require('./config.js')

if (config.blok.domain == 'INSERT_YOUR_DOMAIN') {
  config.blok.domain = 'city.me.storyblok.com'
}

if (config.blok.themeId == 'INSERT_SPACE_ID') {
  config.blok.themeId = '40032'
}

gulp.task('deploy', function() {
  return gulp.src('./views/**/*')
    .pipe(blok(config.blok))
})

gulp.task('styles', function () {
  return gulp.src('source/less/theme.less')
    .pipe(less({compress: true}))
    .pipe(gulp.dest('./views/assets/'))
    .pipe(browserSync.stream())
})

gulp.task('scripts', function () {
  return browserify({
      entries: 'source/js/scripts.js'
    })
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(gulp.dest('views/assets/js'))
    .pipe(browserSync.stream())
})

gulp.task('browsersync', function() {
  browserSync({
    port: 4200,
    serveStatic: ['./views'],
    proxy: {
      target: 'https://' + config.blok.domain,
      reqHeaders: function (config) {
        return {
          'accept-encoding': 'identity',
          'agent': false,
          'browsersyncblok': true
        }
      }
    },
    https: fs.existsSync('./cert.js') ? require('./cert') : false,
    reloadDelay: 1000,
    notify: true,
    open: true,
    logLevel: 'silent'
  })

  gulp.watch('views/**/*.liquid').on('change', reload)
  gulp.watch('source/less/**/*.less', ['styles'])
  gulp.watch('source/js/**/*.js', ['scripts'])
})

gulp.task('default', ['styles', 'scripts', 'browsersync'], function() {
  return watch('./views/**/*')
    .pipe(blok(config.blok))
})

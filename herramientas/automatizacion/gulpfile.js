const gulp = require('gulp')
const serve = require('gulp-server-livereload')

gulp.task('build', (cb) => {
  console.log('Construyendo sitio')
  setTimeout(cb, 1200)
})

gulp.task('serve', (cb) => {
  gulp.src('www').pipe(
    serve({
      livereload: true,
      open: true
    })
  )
})

gulp.task('default',gulp.series('build','serve'))
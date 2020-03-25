var gulp = require('gulp');
var watch = require('gulp-watch');


gulp.task('default', function() {
    console.log("Gulp default task")
})

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.series('default');
  })
})
var gulp = require('gulp');

module.exports = function () {
  gulp.task('watch', function () {
    gulp.watch(['src/nunjucks/pages/*.html'
    ],{usePolling: true}, gulp.series('nunjucks'));
    gulp.watch(['./src/static/scss/*.scss'
    ], {usePolling: true}, gulp.series('sass'));
    gulp.watch(['./src/static/js/*.js'
      ], {usePolling: true}, gulp.series('script'));
  });
};
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');


gulp.task('deployPages', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

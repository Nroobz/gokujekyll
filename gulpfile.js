
// GULP //
var gulp = require('gulp');

// REQUIRED MODULES //
var sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

// end of REQUIRED MODULES //

// MAIN TASKS //
//funny task
gulp.task('burger', function(){
  console.log('Wow, this burger is so juicy!');
});

// gulp-sass task
gulp.task('sass', function(){
  //look at lib/scss/styles.scss
  return gulp.src('./lib/scss/includes.scss')
  // plumber stops errors from stopping gulp, and it shows the error on the terminal
  //convert to scss with the gulp-sass plugin + if fail show logError, removes the need for gulp-plumber
      .pipe(sass().on('error', sass.logError))
  //send to the destination as a css file to (one dot = current folder, two dots = parent folder) ./lib/css
  //dont know why this is needed for this one task tho... because the watch task further down works only without it...
      .pipe(gulp.dest('./lib/css'))
      .pipe(livereload());
});


// END OF MAIN TASKS

// GULP WATCH TASKS

gulp.task('watch', function(){

  var server = livereload();

  gulp.watch('lib/scss/*.scss', ['sass']);

});

// END OF GULP WATCH

// DEFAULT TASK - running order of TASKS

gulp.task('default', ['burger', 'sass', 'watch']);

//END OF DEFAULT TASKS

/**
 * Created by yanglei on 2017/4/5.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/*.js")// ES6 源码存放的路径
    .pipe(babel())
    .pipe(gulp.dest("out")); //转换成 ES5 存放的路径
});
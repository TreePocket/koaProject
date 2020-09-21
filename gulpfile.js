/*
 * @Author: your name
 * @Date: 2020-09-21 22:31:48
 * @LastEditTime: 2020-09-21 22:57:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koaProject/gulpfile.js
 */
const gulp = require('gulp');
const babel = require('gulp-babel');


function buildDev() {
  return gulp.src('./src/server/**/*.js')
    .pipe(babel({
      babelrc: false,
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }))
    .pipe(gulp.dest('dist/server'))
}


exports.default = gulp.series(buildDev);
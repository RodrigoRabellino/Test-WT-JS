const { src, dest, series, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const image = require("gulp-image");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const injectjs = require("gulp-inject-js");
const injectcss = require("gulp-inject-css");

function copyHtml(){
  return src("./src/*.html").pipe(dest("dist"));
}

function injectJs(){
  
  return src("./dist/index.html").pipe(injectjs("./dist/js/*")).pipe(dest("./dist"))
}

function injectCSS(){
  return src("./dist/index.html").pipe(injectcss("./dist/css/*")).pipe(dest("dist"))
}

function concatJs(){
  return src("./src/js/*.js").pipe(concat("allScript.js")).pipe(dest("./dist/js"))
}

function minifyJs(){
  return src("./dist/js/allScript.js").pipe(uglify()).pipe(dest("./dist/js"))
}

function imgTask(){
  return src("./src/images/**/*").pipe(image()).pipe(dest("dist/images"))
}

function buildStyles() {
  return src("./src/scss/**/*.scss")
    .pipe(
      sass({
        sourceComments: true,
      })
    )
    .pipe(autoprefixer({ versions: ["last 2 browsers"] }))
    .pipe(dest("./dist/css"));
}

function cleanStlyes() {
  return src("./dist/css/**/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/css"));
}

exports.img = imgTask;
exports.mini = series(concatJs, minifyJs);
exports.injectcss = injectCSS;


exports.default = series(imgTask, parallel(copyHtml, series(concatJs, minifyJs), buildStyles), cleanStlyes, injectJs, injectCSS);

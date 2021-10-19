const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const image = require("gulp-image");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const inject = require("gulp-inject");

function copyHtml(){
  return src("./src/*.html").pipe(dest("dist"));
}

function injectJs(){
  let indexjs = src("./dist/js/allScript.js");
  return src("./dist/index.html").pipe(inject(indexjs)).pipe(dest("./dist"))
}

function concatJs(){
  return src("./src/js/*.js").pipe(concat("allScript.js")).pipe(dest("./dist/js"))
}

function minifyJs(){
  return src("./src/js/allScript.js").pipe(uglify()).pipe(dest("dist/js"))
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
    .pipe(dest("./src/css"));
}

function cleanStlyes() {
  return src("./src/css/**/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist"));
}

exports.img = imgTask;
exports.mini = series(concatJs, minifyJs);
exports.inject = injectJs;

exports.default = series(copyHtml,series(concatJs, minifyJs), injectJs , imgTask, buildStyles, cleanStlyes,);

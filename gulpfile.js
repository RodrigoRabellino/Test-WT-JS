const { src, dest, series, watch, parallel, task } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const image = require("gulp-image");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const injectjs = require("gulp-inject-js");
const injectcss = require("gulp-inject-css");
const cleanfiles = require("gulp-clean");

function copyHtml() {
  return src("./src/*.html").pipe(dest("dist"));
}

function clean() {
  return src("./dist").pipe(cleanfiles());
}

function injectAllJs() {
  return src("./dist/index.html")
    .pipe(injectjs("./dist/js/allScript.js"))
    .pipe(dest("./dist"));
}

function injectAllCSS() {
  return src("./dist/index.html")
    .pipe(injectcss("./dist/css/*"))
    .pipe(dest("dist"));
}

function concatJs() {
  return src("./src/js/**/*.js")
    .pipe(concat("allScript.js"))
    .pipe(dest("./dist/js"));
}

function minifyJs() {
  return src("./dist/js/allScript.js").pipe(uglify()).pipe(dest("./dist/js"));
}

function imgTask() {
  return src("./src/images/**/*").pipe(image()).pipe(dest("dist/images"));
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


exports.updatecss = function () {
  watch(
    "./src/scss/*.scss",
    series(
      clean,
      imgTask,
      parallel(copyHtml, series(concatJs, minifyJs), buildStyles),
      cleanStlyes,
      injectAllJs,
      injectAllCSS
    )
  );
};

exports.updatejs = function () {
  watch(
    "./src",
    series(
      clean,
      imgTask,
      parallel(copyHtml, series(concatJs, minifyJs), buildStyles),
      cleanStlyes,
      injectAllJs,
      injectAllCSS
    )
  );
};

exports.default = series(
  clean,
  imgTask,
  parallel(copyHtml, series(concatJs, minifyJs), buildStyles),
  cleanStlyes,
  injectAllCSS,
  injectAllJs
);

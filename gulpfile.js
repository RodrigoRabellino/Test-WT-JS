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

function injectJs() {
  return src("./dist/index.html")
    .pipe(injectjs("./dist/js/allScript.js"))
    .pipe(dest("./dist"));
}

function injectCSS() {
  return src("./dist/index.html")
    .pipe(injectcss("./dist/css/*"))
    .pipe(dest("dist"));
}

function concatJs() {
  return src("./src/js/*.js")
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

function injectSlickcss() {
  task(
    src("./src/scss/slick/*.scss").pipe(sass()).pipe(dest("./dist/css/slick"))
  );
  task(
    src("./dist/index.html")
      .pipe(injectcss("./dist/css/slick/slick.css"))
      .pipe(dest("./dist"))
  );

  return src("./dist/index.html")
    .pipe(injectcss("./dist/css/slick/slick-theme.css"))
    .pipe(dest("./dist"));
}

function injectSlickJs() {
  task(src("./src/js/slick/*.js").pipe(uglify()).pipe(dest("./dist/js/slick")));

  return src("./dist/index.html")
    .pipe(injectjs("./dist/js/slick/slick/slick.min.js"))
    .pipe(dest("./dist"));
}

exports.img = imgTask;
exports.slick = injectSlickcss;
exports.injectcss = injectCSS;

exports.updatecss = function () {
  watch(
    "./src/scss/*.scss",
    series(
      clean,
      parallel(copyHtml, series(concatJs, minifyJs), buildStyles),
      cleanStlyes,
      injectJs,
      injectCSS
    )
  );
};

exports.default = series(
  clean,
  imgTask,
  parallel(copyHtml, series(concatJs, minifyJs), buildStyles),
  cleanStlyes,

  injectSlickcss,
  injectSlickJs,
  injectJs,
  injectCSS
);

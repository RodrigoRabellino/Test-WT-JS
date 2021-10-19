const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const image = require("gulp-image");

function copyHtml(){
  return src("./src/*.html").pipe(dest("dist"));
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
exports.default = series(copyHtml, imgTask, buildStyles, cleanStlyes,);

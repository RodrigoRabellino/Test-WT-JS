const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

function buildStyles() {
  return src("./scss/**/*.scss")
    .pipe(
      sass({
        sourceComments: true
      })
    )
    .pipe(autoprefixer({ versions: ["last 2 browsers"] }))
    .pipe(dest("./css"));
}

exports.buildStyles = buildStyles;
exports.default = ()=> {
  watch("./scss/**/*.scss", buildStyles)
};

// gulp.task("sass", () => {
//   return gulp.src("./scss/*.scss")
//     .pipe(sass({
//       outputStyle: "expanded",
//       sourceComments: true
//     }))
//     .pipe(autoprefixer({
//       versions: ["last 2 browsers"]
//     }))
//     .pipe(gulp.dest("./css"));
// });

// gulp.task("default", () => {
//   return gulp.watch("./scss/*.scss", ["sass"]);
// });

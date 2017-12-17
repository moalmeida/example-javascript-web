const gulp = require('gulp');
const sequence = require('gulp-sequence');
const eslint = require('gulp-eslint');
const jest = require('gulp-jest').default;
const codacy = require('gulp-codacy');

gulp.task('lint', () =>
  gulp.src(['app/**/*.js', 'app/**/*.jsx', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()));

gulp.task('test', () => {
  process.env.NODE_ENV = 'test';
  return gulp.src('.')
    .pipe(jest({
      coverageDirectory: 'coverage',
      coverageReporters: [
        'text',
        'json',
        'lcov',
      ],
      collectCoverageFrom: [
        'app/**/*.{js,jsx}',
        '!**/node_modules/**',
      ],
      // verbose: true,
      coverage: true,
    }));
});

gulp.task('codacy', () =>
  gulp.src(['coverage/lcov.info'], { read: false })
    .pipe(codacy({
      token: '2ff3e3dba9a14fb5a54b4ad83bdf3e6f',
    })));

gulp.task('default', sequence(['lint', 'test'], 'codacy'));

exports.modules = gulp;

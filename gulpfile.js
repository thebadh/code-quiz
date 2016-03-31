const gulp = require( 'gulp' );
const mocha = require( 'gulp-mocha' );
const Server = require( 'karma' ).Server;

gulp.task( 'testClient', ( done ) => {
    new Server({
        configFile: `${__dirname}/karma.conf.js`,
        singleRun: true,
    }, () => {
        done();
    }).start();
});

gulp.task( 'testServer', ['testClient'], () =>
    gulp.src( 'test/server/*.js', { read: false })
    .pipe( mocha())
    .once( 'error', () => {
        process.exit( 1 );
    })
    .once( 'end', () => {
        process.exit( 0 );
    })
);

gulp.task( 'test', ['testServer']);

module.exports = config => {
    config.set({
        basePath: '',
        files: [
            'src/client/index.js',
            'test/client/index.js',
        ],
        plugins: [
            'karma-jquery',
            'karma-mocha',
            'karma-chai-plugins',
            'karma-chai-sinon',
            'karma-chrome-launcher',
            'karma-mocha-reporter',
        ],
        frameworks: [
            'mocha',
            'chai',
            'chai-sinon',
            'chai-as-promised',
            'jquery-2.1.0',
        ],
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
    });
};

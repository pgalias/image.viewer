function conf(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/*_test.ts',
            'src/**/*_test.ts'
        ],
        preprocessors: {
            'src/*_test.ts': ['webpack'],
            'src/**/*_test.ts': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' }
                ]
            },
            node: {
                fs: 'empty'
            },
            resolve: {
                extensions: ['', '.ts', '.js']
            }
        },
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity,
        plugins: [
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-spec-reporter'
        ]
    });
}

module.exports = conf;

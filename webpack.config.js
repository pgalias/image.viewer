const webpack = require('webpack');
const fs = require('fs');

const isProduction = process.env.NODE_ENV === 'production';
const name = `image.viewer${isProduction ? '.min' : ''}`;
const banner = fs.readFileSync('./.HEADER', 'utf8');

let config = {
    resolve: {
        extensions: ['', '.scss', '.css', '.ts', '.js']
    },
    plugins: [
        new webpack.BannerPlugin(banner),
    ],
    entry: ['core-js/fn/object/assign', './src/app.ts'],
    output: {
        path: __dirname + '/dist',
        publicPath: '',
        filename: `${name}.js`
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        }, {
            test: /\.s?css$/,
            loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
        },]
    },
};

if (!isProduction) {
    config.devtool = 'source-map';
}

module.exports = config;
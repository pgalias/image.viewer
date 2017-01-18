const ExtractText = require('extract-text-webpack-plugin');
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
        new ExtractText('style.css', {allChunks: true}),
        new webpack.BannerPlugin(banner),
    ],
    entry: ['core-js/fn/object/assign', './src/app.ts'],
    output: {
        path: __dirname + '/dist',
        filename: `${name}.js`
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
        }, {
            test: /\.s?css$/,
            loader: ExtractText.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
        },]
    },
    devServer: {
        contentBase: './'
    },
};

if (!isProduction) {
    config.devtool = 'source-map';
}

module.exports = config;
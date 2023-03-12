const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map', //original: inline-source-map
    devServer: {
        static: '/dist',
        hot: true, // what is hot??
        port:"5012",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/javascript"
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});
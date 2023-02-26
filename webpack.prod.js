const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            ],
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        }),
    ],
    optimization: {
        minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin(),
        ],
    },
});

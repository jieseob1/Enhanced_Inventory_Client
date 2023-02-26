const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); // to generate an index html file based on our template file
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: {
        app: './src/index.ts',
    },
    // defined entry point for our application as './src/index.js'
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
        }),      
        new HtmlWebpackPlugin({
        title: 'Production',
        }),
    ],
    output: {
        filename: '[name].[contenthash].ts',
        path: path.resolve(__dirname, './dist'), //output path is dist

    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },     
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
};
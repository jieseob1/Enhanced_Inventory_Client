const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); // to generate an index html file based on our template file
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    // defined entry point for our application as './src/index.js'
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
        }),      
        new HtmlWebpackPlugin({
        title: 'Production',
        template: 'public/index.html',
        filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
    ],
    output: {
        filename: './src/index.js',
        path: path.resolve(__dirname, 'dist'), //output path is dist
        publicPath: '/',
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },     
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src'),
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
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
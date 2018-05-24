let baseConfig = require('./webpack.base.conf');

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = merge(baseConfig, {
    output: {
        path: path.join(__dirname, '../dist/pc'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '../'
    },
    entry: {
        'main': path.join(__dirname, '../src/pages/pc/index.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/pages/pc/index.html'),
            filename: 'index.html',
            minify: {
                removeComments: true
            },
            cache: false,
            hash: false,
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../src/static'),
                to: path.join(__dirname, '../dist/pc/static')
            }
        ]),
        new CleanWebpackPlugin(['../dist/pc'], {
            root: __dirname,
            verbose: true,
            dry: false,
            allowExternal: true
        })
    ]
});
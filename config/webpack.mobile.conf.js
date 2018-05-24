let baseConfig = require('./webpack.base.conf');

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PostCompilePlugin = require('webpack-post-compile-plugin');
const TransformModulesPlugin = require('webpack-transform-modules-plugin');

module.exports = merge(baseConfig, {
    output: {
        path: path.join(__dirname, '../dist/mobile'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '../'
    },
    entry: {
        'main': path.join(__dirname, '../src/pages/mobile/index.js')
    },
    plugins: [
        new PostCompilePlugin(),
        new TransformModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/pages/mobile/index.html'),
            filename: 'index.html',
            minify: { removeComments: true },
            cache: false,
            hash: false,
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../src/static'),
                to: path.join(__dirname, '../dist/mobile/static')
            }
        ]),
        new CleanWebpackPlugin(['../dist/mobile'], {
            root: __dirname,
            verbose: true,
            dry: false,
            allowExternal: true
        })
    ]
});
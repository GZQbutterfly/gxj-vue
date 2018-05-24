
const path = require('path');



module.exports = {
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '../'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader?cacheDirectory'
            },
            {
                test: /\.(html|htm)$/,
                use: 'raw-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(styl|stylus)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', {loader:'stylus-loader',options:{'resolve url': true}}]
            },
            {
                test: /\.(png|svg|jpg|gif|eot|woff|ttf)$/,
                use: [
                    {
                        loader: 'url-loader?limit=8192&name=static/images/build/[name].[hash:8].[ext]',
                        options: {
                            publicPath: '/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [

    ]
};
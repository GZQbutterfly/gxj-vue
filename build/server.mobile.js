// 构建本地服务器
let webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./mobile.dev.js');

let pathname = 'localhost',
    port = 3001;

// ==>
new WebpackDevServer(webpack(config), {
    contentBase: '../dist/mobile',
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    compress: true,
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    },
    proxy: {

    },
    disableHostCheck: false
}).listen(port, pathname, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log(`Listening at http://${pathname}:${port}`);
    }
});

let px2rem = require('postcss-px2rem');
let autoprefixer = require('autoprefixer');

module.exports = ({webpack}) => {
    let isMobile = /mobile/.test(webpack.resourcePath);
    console.log('isMobile: ', isMobile);
    let config = {
        plugins: [
            autoprefixer({
                browsers: ['iOS >= 7', 'Android >= 4',
                    'last 10 Chrome versions', 'last 10 Firefox versions',
                    'Safari >= 6', 'ie > 8', 'last 5 versions']
            })
        ]
    }
    if (isMobile) {
        config.plugins.push(
            px2rem({
                remUnit: 100
            })
        );
    }
    return config;
};

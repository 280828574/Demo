let path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://admin.51pm.damei.org',   // 你请求的第三方接口
                changeOrigin: true,
                secure: false,
                logLevel: 'debug',
                router: {}
            }
        },
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    }
}
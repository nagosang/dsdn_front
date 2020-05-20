'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const port = 9528 // dev port

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                ws: false,
                target: 'http://localhost:8081/hsdn/api/',
                changeOrigin: true
            }
        },
    },
    configureWebpack: config => {
        if (debug) {
            config.devtool = 'source-map'
        }
    }
}

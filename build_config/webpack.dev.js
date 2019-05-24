const path = require('path')
const { smart } = require('webpack-merge')
const base = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = smart(base, {
    mode: 'development',
    devServer: {
        port: 8080,
        progress: true,
        contentBase: path.join(__dirname, '../src')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/main.html'),
            filename: 'bundle' + '.html', // 输出的hmtl路径
            chunks: ['index']
            // hash: true
        })
    ]
})

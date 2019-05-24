const path = require('path')
const { smart } = require('webpack-merge')
const base = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = smart(base, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/main.html'),
            filename: 'bundle' + '.html', // 输出的hmtl路径
            chunks: ['index'],
            minify: {
                collapseWhitespace: true, // 去除空格换行
                removeComments: true, // 去除注释
                removeRedundantAttributes: true, // 删除冗余属性
                removeScriptTypeAttributes: true, // 去除脚本类型标签
                removeStyleLinkTypeAttributes: true, // 去除样式类型
                useShortDoctype: true // 使用短文件形式
            }
            // hash: true
        })
    ]
})

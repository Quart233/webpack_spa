const path = require('path')
const MiniCssExtractCss = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
    mode: 'production',
    entry: {
        index: path.join(__dirname, '/src/main.js')
    },
    output: {
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractCss.loader, 'css-loader', 'less-loader']
            },
            {
	            test: require.resolve('jquery'), //require.resolve 用来获取模块的绝对路径
	            use: [
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }, 
                    {
                        loader: 'expose-loader',
                        options: '$'
                    },
                    {
                        loader: 'expose-loader',
                        options: 'jquery'
                    }
                ]
	        }
        ]
    },
    plugins: [
        new MiniCssExtractCss({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/main.html'),
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
}

module.exports = config
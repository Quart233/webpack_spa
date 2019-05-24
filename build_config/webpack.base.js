const path = require('path')
const MiniCssExtractCss = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: path.join(__dirname, '../src/main.js')
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
        })
    ]
}
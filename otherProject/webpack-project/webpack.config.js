module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:  __dirname + "/app/main.js",//唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'//添加对样式表的处理
        }
        ]
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    }
}
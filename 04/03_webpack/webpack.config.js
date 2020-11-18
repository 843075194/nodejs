// 导出一个配置对象
module.exports = {
    // 入口
    entry: "./main.js",
    // 出口
    output: {
        // 路徑
        path: __dirname,
        // 打包之后的名字
        filename: "./bundle.js"
    },
    // 配置加载机
    module: {
        rules: [
            // 这是一个规则对象
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            // 这是另一个规则对象
            {
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    }
}
const path = require('path');

module.exports = {
    // 建置的模式設定
    mode: "development", // 預設"production(上線)" 或 "development(開發, 除錯方便)"...
    // 入口
    entry: './src/main.js',
    // 輸出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // DevServer 設定(自動化建置 - 省去一直 npm run build)
    devServer: {
        static: "./dist",
    },
    // 載入器
    module: {
        rules: [
            { // 1. 【SASS】樣式表的載入規則
                test:/\.scss$/i, // 載入檔名的【regEXP】, i標誌>不分大小寫
                use: ["style-loader", "css-loader", "sass-loader"] // 符合【regEXP】, 就使用這些載入器
            },
            { // 2. 【babel】編譯器的載入規則
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    watch: true,
    entry: {
        main: './src/main.js',
        },
    output: {
        path: path.join(__dirname, 'public/assets'),
        publicPath: '/', // in scss of js bestanden verwijzen naar andere assets met /andereasset.js|css|....
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ]
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],

}
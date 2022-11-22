const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        fuckill: "./src/fuckill.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "lib"),
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: "",
        //     filename:"",
        //     template:""
        // }),
    ],
}
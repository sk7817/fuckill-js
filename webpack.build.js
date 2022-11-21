const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        "fuckill.esmodule":"./src/vue.esmodule.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "lib"),
        //library: 'Fuckill',
        libraryTarget: 'umd',
        libraryExport: 'default', 
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: "",
        //     filename:"",
        //     template:""
        // }),
    ],
}
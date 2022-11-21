const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
       example:"./example/example-esm.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "example-esm-dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "fuckill.js example",
            //filename:"example.html",
            template:"./example/example-esm.html"
        }),
    ],
}
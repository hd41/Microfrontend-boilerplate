const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        publicPath: "http://localhost:3001/",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.tsx?$/, // Match .ts and .tsx files
                exclude: /node_modules/,
                use: "babel-loader", // Use Babel to transpile TypeScript
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "microApp1",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
        port: 3001,
        historyApiFallback: true,
    },
};
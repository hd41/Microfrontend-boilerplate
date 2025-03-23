const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        publicPath: "http://localhost:3000/",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Match .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"], // Use Babel presets
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
            name: "host",
            remotes: {
                microApp1: "microApp1@http://localhost:3001/remoteEntry.js",
                microApp2: "microApp2@http://localhost:3002/remoteEntry.js",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html", // HTML template for the host app
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx",  ".ts", ".tsx"], // Resolve .js and .jsx extensions
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
};
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

export default {
    devtool: 'source-map',
    entry: {
        app: './src/index.jsx',
        vendor: [
            'react',
            'react-dom',
            'react-scroll',
            'classnames'
        ]
    },
    output: {
        filename: "app.bundle.js",
        path: path.resolve("./dist/")
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['babel']
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=1'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new HtmlWebpackPlugin({
            template: './src/index.template.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};

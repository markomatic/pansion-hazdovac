const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');

const DEBUG = !argv.release;

const appConfig = {
    cache: DEBUG,
    debug: DEBUG,
    devtool: DEBUG ? '#inline-source-map' : false,
    stats: {
        colors: true,
        reasons: DEBUG
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: {
        app: './src/index.jsx',
        vendor: [
            'react',
            'react-dom',
            'react-scroll'
        ]
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve('./build/')
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new HtmlWebpackPlugin({
            template: './src/index.template.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};

module.exports = [
    appConfig
];

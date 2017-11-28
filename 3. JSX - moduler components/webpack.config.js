var webpack = require("webpack");

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: __dirname+'/dist/assets/',
        // publicPath: '/dist/assets/',
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [require('autoprefixer')]
                }}]
            }
            ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ]
}
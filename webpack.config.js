const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { type } = require('os')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    // context: path.resolve(__dirname, 'src'),

    mode: 'development',

    entry: {
        main: './src/index.js',
        // swiper: './src/swiper-bundle.js'
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    devServer: {
        port: 4200
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                    {
                        from: path.resolve(__dirname, 'src/images'),
                        to: path.resolve(__dirname, 'dist/images')
                    }
            ]
        })
    ],

    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },

            {
                test: /\.woff$/,
                type: 'asset/resource'
            },

            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    }
}
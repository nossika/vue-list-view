const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'list-view': path.resolve(__dirname, 'packages/list-view.vue'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['env'],
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ],
    },
    plugins: [

    ],
};
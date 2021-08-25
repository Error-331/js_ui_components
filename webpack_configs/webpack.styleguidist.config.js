// external imports
const webpack = require('webpack');

// local imports

// type definitions

//implementation
// styleguidist webpack config
const styleguidistConfig  = {
    target: 'web',
    mode: 'development',
    devtool: 'eval',

    resolve: {
        extensions: ['.js', '.jsx','.ts', '.tsx', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        rootMode: 'upward',
                    }
                }
            },

            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'image/svg+xml'}}]
            },

         /*   {
                test: /^((?!\.global).)*\.(png|jpg)$/,
                use: [{loader: 'url-loader', options: {limit: 8192}}]
            },*/

            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'application/font-woff'}}]
            },

            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'application/font-woff'}}]
            },

            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [{loader: 'url-loader', options: {limit: 10000, mimetype: 'application/octet-stream'}}]
            },

            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [{loader: 'file-loader'}]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process': {env: {}},
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
};

// exports
module.exports = styleguidistConfig;

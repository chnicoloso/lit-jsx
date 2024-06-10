const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isDev = true;
    return {
        entry: path.resolve(__dirname, '..', 'index.tsx'),
        devtool: 'inline-source-map',
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [
                        // {
                        //     loader: 'babel-loader'
                        // },
                        {
                            loader: 'ts-loader',
                            // options: {
                            //     // Allow compiling with TS errors (TS becomes basically a linter).
                            //     transpileOnly: true
                            // }
                        }
                    ]
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, '..', 'index.html'),
                chunks: [ 'main' ]
            }),
            new DefinePlugin({
                'process.env.DEV': isDev
            })
        ].filter(x => x),
        devServer: {
            https: true,
            allowedHosts: 'all',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            }
        }
    }
};
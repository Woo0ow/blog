const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function (env, argv) {
    const isDeveplopment = env.development || env.WEBPACK_SERVE;
    return {
        target:'web',
        mode: isDeveplopment ? 'development' : 'production',
        devtool: isDeveplopment ? 'source-map' : 'none',
        entry: './src/index.js',
        output: {
            filename: 'js/[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: env.WEBPACK_SERVE ? '/' : './',
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        hotReload: true,
                        presets: [
                            ['default', { css: false }],
                            'env',
                        ],
                    },
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules\/(?!(marked)\/).*/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        { 
                            loader: MiniCssExtractPlugin.loader,
                            options:{
                                esModule: false,
                                publicPath:env.WEBPACK_SERVE?'/':'../'

                            } 
                        },
                        // 'vue-style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        }
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        { 
                            loader: MiniCssExtractPlugin.loader,
                            options:{
                               esModule: false,
                                publicPath:env.WEBPACK_SERVE?'/':'../'

                            } 
                        },
                       // 'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        }
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                        esModule: false
                    },
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                    },
                },
                {
                    test: /\.md$/,
                    use: 'raw-loader'
                }
            ],
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                'vue$': path.resolve(__dirname, 'src/assets/js/vue2.js')
            },
        },
        plugins: isDeveplopment ? [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                favicon: './public/favicon.ico',
                inject: true,
                scriptLoading: 'blocking',
                vueVersion: 'https://cdn.bootcdn.net/ajax/libs/vue/2.7.16/vue.js'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({
                linkType:"text/css",
                filename:"css/[name].css"
            })
        ] : [new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            inject: true,
            scriptLoading: 'blocking',
            vueVersion: 'https://cdn.bootcdn.net/ajax/libs/vue/2.7.16/vue.min.js',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                useShortDoctype: true,
            },
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
	new MiniCssExtractPlugin({
                linkType:"text/css",
                filename:"css/[name].css"
            })
        ],
        devServer: env.WEBPACK_SERVE ? {
            // hot: true,
            host: '0.0.0.0',
            port: 3000,
            historyApiFallback: true,
            allowedHosts: 'all'
        } : {},
        optimization: isDeveplopment ? {} : {
            splitChunks: {
                chunks: 'all',
                minSize: 2,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
            },
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                }),
            ],
        },
        externals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            'highlight.js': 'hljs',
            vuex: 'Vuex',
            'mock.js': 'mock'
        }
    }
}

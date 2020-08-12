const path =  require('path');
const TerserPlugin =  require('terser-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
const {CleanWebpackPlugin}  = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'none',
    module: {
         rules: [
            
             {
                 test: /\.(png|jpg)$/,
                 use: [
                     'file-loader'
                 ]
             },
             {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [         
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                  ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    } 
                }

            }
         ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[
                '**/*', // Remove all the files from dist folder which is the default folder
                path.join(process.cwd(), 'build/**/*') // For removing outside dist provide the absolute path.Removes all the files from build folder
            ]
        }),
        new HtmlWebpackPlugin()
    
    ]
}
const path =  require('path');
//const TerserPlugin =  require('terser-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
const {CleanWebpackPlugin}  = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production', // Developments vs prod, for any error will refer to bundle, dev mode uses sourcemap and error will go to source file.
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

            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
         ]
    },
    plugins: [
        //new TerserPlugin(), // Uses Terser to minify the JS in your project. In production this plugin is included by default.
        new MiniCssExtractPlugin({  // Extract css into a separate css bundle
            filename: 'style.[contenthash].css'
        }),
        new CleanWebpackPlugin({  //  clean the /dist folder before each build, so that only used files will be generated.
            cleanOnceBeforeBuildPatterns:[
                '**/*', // Remove all the files from dist folder which is the default folder
                path.join(process.cwd(), 'build/**/*') // For removing outside dist provide the absolute path.Removes all the files from build folder
            ]
        }),
        new HtmlWebpackPlugin({ // Generate the HTML file during the build process
            title: 'Hello World',
            template: 'src/index.hbs',
           // filename: 'subfolder/custom_filename.html',
             description: 'Some description'
            
        })
    
    ]
}
const path =  require('path');
//const TerserPlugin =  require('terser-webpack-plugin'); Don't need 
//const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
const {CleanWebpackPlugin}  = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].bundle.js', // We don,t need content hash (bundle.[contenthash].js) in devlopemnt because we do not need broswer caching.
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development', // Developments vs prod, for any error will refer to bundle, dev mode uses sourcemap and error will go to source file.
    devServer: {
        contentBase:  path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000
    },
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
                 //   MiniCssExtractPlugin.loader,
                    'style-loader',    
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [         
                    //MiniCssExtractPlugin.loader,
                    'style-loader',
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
            },
            {
                test: /\.(woff2|woff|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // This will preserve the file name nad extension when generatinf file in the dist folder.
                            outputPath: 'fonts/' // This will create a subfolder inside dist folder.
                        }
                    }
                ]
            }
         ]
    },
    plugins: [
      //  new TerserPlugin(), // Uses Terser to minify the JS in your project
      /*  new MiniCssExtractPlugin({  // Extract css into a separate css bundle
            filename: 'style.[contenthash].css'
        }), */   // Not needed for development 
        new CleanWebpackPlugin({  //  clean the /dist folder before each build, so that only used files will be generated.
            cleanOnceBeforeBuildPatterns:[
                '**/*', // Remove all the files from dist folder which is the default folder
                path.join(process.cwd(), 'build/**/*') // For removing outside dist provide the absolute path.Removes all the files from build folder
            ]
        }),
        new HtmlWebpackPlugin({ // Generate the HTML file during the build process
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'Hello World',
            template: 'src/page-template.hbs',
           // filename: 'subfolder/custom_filename.html',
             description: 'Some descriptionHello World'
        }),
        new HtmlWebpackPlugin({ // Generate the HTML file during the build process
            filename: 'kiwi.html',
            chunks: ['kiwi'],
            title: 'kiwi',
            template: 'src/page-template.hbs',
           // filename: 'subfolder/custom_filename.html',
             description: 'Kiwi'
        })
    
    ]
}
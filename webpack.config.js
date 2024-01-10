const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// const Dotenv = require('dotenv-webpack')

module.exports = (env,argv) => {
    const {mode} = argv
    const isDev = mode === 'development'
    const outputFileName = isDev ? '[name].js' : '[name].[contenthash].js'
    const folder = isDev ? 'devBuild' : 'build'
    const sourceMap = isDev ? 'source-map' : false
    const cleanIfDev = isDev ? true : false

    const babel = {
        test: /\.(m?js|svg|jsx)$/,
        exclude: /node_modules/,
        use:{
                loader: 'babel-loader',
                options: { presets:[
                    [ '@babel/preset-react', {runtime: 'automatic'}]
                ] }
            }        
    }

    const imgLoader= {
        test: /\.(png|jpg|jpeg|gif)$/i,
        exclude: path.resolve(__dirname, 'node_modules'),
        type: 'asset/resource'
    }
    const svgLoader = {
        test: /\.svg$/,
        use:['@svgr/webpack']
    }
    const rules = [ babel,imgLoader,svgLoader]
    
    return {
        mode: mode,
        entry: { index: './index.js' },
        output:{
            filename: outputFileName,
            path: path.resolve(__dirname, folder ),
            clean: cleanIfDev
        },
        module: { rules },
        plugins: [ new HtmlWebpackPlugin({template:'./src/index.html'}),new CopyPlugin({ patterns: [ { from: path.resolve(__dirname, './public') } ] })], //new Dotenv(),
        
        devtool: sourceMap,
        // optimization: {
        //     runtimeChunk: 'single',
        //     // splitChunks: {
        //     //     chunks: 'all'
        //     // }
        // },
        devServer:{
            open: true,
            compress: true
        }
    }
}
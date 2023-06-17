const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
   entry: './src/index.js',  
   output: {  
      path: path.join(__dirname, 'dist'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {    
      port: 8080  
   },  
   module: {  
      rules: [  
         {  
            test: /\.jsx?$/,  
            exclude: /node_modules/,  
            use: {  
              loader: "babel-loader",  
            }  
         }, {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
         }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({  
         template: './index.html'  
      })  
   ]  
}  
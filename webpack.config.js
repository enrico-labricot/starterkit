const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

/*
* entry points :
*   app.js for compile webapp
*   app.scss for compile styles
*   icons.js for manage icons
* */
module.exports = {
  devtool: 'source-map',
  entry: [
    './src/app.js',
    './src/app.scss',
    './src/webapp/sprite.js',
    './src/styleguide/sprite-icons.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.vue$/, // manage .vue file
      loader: 'vue-loader'
    }, {
      test: /\.js$/, // regexp for transpile all js file into es2015
      loader: 'babel-loader',
      exclude: '/node_modules/' // except folder
    }, {
      test: /\.svg$/, // create a sprite-icons.svg file for icons
      loader: 'svg-sprite-loader',
      options: {
        extract: true,
        spriteFilename: 'assets/images/svg/sprite-icons.svg'
      },
      include: path.resolve(__dirname, './src/styleguide/themes/default/assets/images/svg/icons')
    }, {
      // create a sprite.svg file for other svg files
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      options: {
        extract: true,
        spriteFilename: 'assets/images/svg/sprite.svg'
      },
      include: path.resolve(__dirname, './src/webapp/themes/default/assets/images/svg')
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      }),
      exclude: '/node_modules/'
    }, {
      test: /\.(woff|woff2)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader?name=assets/fonts/[name].[ext]',
      exclude: '/node_modules/'
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'file-loader?name=assets/images/[name].[ext]',
      exclude: '/node_modules/'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new SpriteLoaderPlugin(),
    new ExtractTextPlugin({
      filename: 'assets/styles/main.min.css',
      allChunks: true
    })
  ],
  devServer: {
    host: "0.0.0.0", // for external IP access (default = localhost)
    port: 9001,
    disableHostCheck: true, // security update for allow external IP access
    historyApiFallback: true,
    noInfo: true,
    watchContentBase: true // for watching static files
  }
};





// @todo : check in details...
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}


/*
* @todo :
* HTMLWEBPACKPLUGIN => favicon: Adds the given favicon path to the output html.
*
* */

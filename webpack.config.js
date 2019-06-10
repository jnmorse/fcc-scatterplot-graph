const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
require('dotenv').config()

const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

// PostCSS
const htmlWebpackPlugin = require('html-webpack-plugin')

const CONFIG = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  entry: {
    main: [
      path.resolve(__dirname, 'src/client'),
      path.resolve(__dirname, 'src/styles')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /server/, /test/],
        loader: 'babel-loader'
      },

      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        exclude: [/node_modules/, /src\/fonts/],
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=images/[name].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, '
            + 'interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },

      {
        test: /\.((woff2?|svg)(\?v=\d+\.\d+\.\d+))?$|(woff2?|svg|jpe?g|png|gif|ico)$/,
        exclude: /src\/images/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },

      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      hash: true,
      inject: true,
      title: 'FCC Scatter Plot Graph',
      template: './src/index.html'
    })
  ]
}

if (TARGET === 'serve' || !TARGET) {
  module.exports = merge(CONFIG, {
    entry: {
      main: [
        'webpack-hot-middleware/client?path=/__webpack_hmr'
      ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: 'public'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}

else if (TARGET === 'build') {
  module.exports = merge(CONFIG, {
    mode: 'production'
  })
}

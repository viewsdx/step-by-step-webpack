const path = require('path')

module.exports = {
  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },

  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [require.resolve('babel-preset-react-app')],
          cacheDirectory: true,
        },
      },
    ],
  },

  output: {
    filename: 'app.js',
    publicPath: '/',
  },
}

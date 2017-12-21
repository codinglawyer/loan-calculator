const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  modules: path.join(__dirname, 'node_modules')
}

module.exports = {
  entry: ['babel-polyfill', PATHS.app],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: PATHS.app,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: [PATHS.app, PATHS.modules],
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}

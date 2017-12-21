const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
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
        include: PATHS.app,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}

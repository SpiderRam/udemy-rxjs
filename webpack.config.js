const path = require('path')

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        use: ['source-map-loader']
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}

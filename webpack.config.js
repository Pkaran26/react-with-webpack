const path = require("path")

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "./src/front"),
    historyApiFallback: true
  },
  entry: path.resolve(__dirname, "./src/front/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      //{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ]
  },
  output: {
    path: path.join(__dirname, './src/public'),
    publicPath: "http://localhost:8181/",
    filename: "bundle.js"
  }
}

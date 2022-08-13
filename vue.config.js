module.exports = {
  productionSourceMap: false,
  publicPath: '/',
  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    disableHostCheck: true
  }
}

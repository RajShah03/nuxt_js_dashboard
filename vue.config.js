module.exports = {
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 5000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // publicPath for production build if needed
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}
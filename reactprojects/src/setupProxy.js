const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/api', createProxyMiddleware({
    // target: 'http://47.105.55.7:3001/',
    target:'http://localhost:3001/',
    changeOrigin: true,
  }));

  app.use('/api2', createProxyMiddleware({
    target: 'http://47.105.55.7:3001',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/api2': '/api', // axios 访问/api2 == target + /api
    }
  }));

};
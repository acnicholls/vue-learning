module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8082',
          changeOrigin: true,
        },
      },
      clientLogLevel: 'info',
      watchOptions:
      {
        poll: true,
      },
    },
  },
};

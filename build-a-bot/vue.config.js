module.exports = {
  lintOnSave: true,
  configureWebpack: {
    watchOptions:
    {
      poll: true,
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8082',
          changeOrigin: true,
        },
      },
    },
  },
};

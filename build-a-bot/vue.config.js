module.exports = {
  lintOnSave: true,
  configureWebpack: {
      module: {
        rules: [
          {
            test: /\.coffee$/,
            use: ['coffee-loader'],
          },
        ],
      },
      clientLogLevel: 'info',
      watchOptions:
      {
        poll: true,
      },
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8082',
          changeOrigin: true,
        },
      },
  },
};

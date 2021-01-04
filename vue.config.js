const merge = require('webpack-merge');
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // publicPath:'/wfd-vue/',
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // config.externals = /^@antv.*/;
    }
    config.output = merge(config.output, {
      libraryExport: 'default'
    })
    resolve = {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        return merge(options, {
          limit: 10000 // default 10k
        })
      })
      .end();
  },
  css: {extract: false},
  devServer: {
    port: 8000,
    hot: true,
    open: 'Google Chrome'
  }
};

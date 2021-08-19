// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
      .set('common', resolve('./src/common'))
      .set('network', resolve('./src/network'))
      .set('views', resolve('./src/views'))
      // set第一个参数：设置的别名，第二个参数：设置的路径
  },
  lintOnSave: false
}

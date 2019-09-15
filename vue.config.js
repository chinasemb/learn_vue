const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'
// 项目指定到域名的根目录下
// 如果说
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  // 颗粒化的配置webpack:  里面是一个方法 , 链式调用
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  // 打包时不生成.map 文件,这样子,会减少我们打包的体积,同时加快我们的打包速度
  devServer: {
    proxy: 'http://localhost:4000'
  }
  // 告诉开发服务器,将任何位置请求(没有匹配到静态文件的请求),都代理到 'http://localhost:4000' 这个URL , 来满足跨域的需求
}

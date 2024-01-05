const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const { config } = require('process');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true
  },
  configureWebpack: {
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src/')
        }
    }
  }

})

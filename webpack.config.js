'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    app: 'app/web/page/app/index.js'
  },
  alias: {
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store',
    vue: 'vue/dist/vue.esm.js',
    '@': 'app/web',
    utils: 'app/web/framework/utils',
    config: 'app/web/config'
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: {
    scss: true,
    urlimage: {
      exclude: /app\/web\/icons/
    },
    svg: {
      test: /\.svg$/,
      use: [{
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      }],
      include: /app\/web\/icons/,
    }
  },
  plugins: {
    copy: [{
      from: 'app/web/asset/css/bootstrap.min.css',
      to: 'asset/css/bootstrap.min.css'
    }]
  },
  done() {

  }
};
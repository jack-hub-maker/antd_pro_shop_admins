/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-12 09:56:44
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-12 10:20:59
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\config\proxy.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      //target: 'https://preview.pro.ant.design',
      target: 'https://api.shop.eduwork.cn/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};

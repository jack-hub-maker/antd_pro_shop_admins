﻿/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-11 20:55:46
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-12 09:37:56
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/config/routes.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/login',
        component: '../layouts/LoginLayout',
        routes: [
          {
            name: 'login',
            path: '/login',
            component: './Login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            // authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
              },

              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];

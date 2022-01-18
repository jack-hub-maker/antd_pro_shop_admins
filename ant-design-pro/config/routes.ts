/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-11 20:55:46
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-11-13 15:44:26
 * @FilePath: /11.4react/antd_pro_shop_admins/ant-design-pro/config/routes.ts
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
                redirect:'/dashboard'
              },
              {
                path: '/dashboard',
                name:'dashboard',
                icon:'PieChartOutlined',
                component: '@/pages/DashBoard',
              },
              {
                path: '/user',
                name:'user',
                icon:'UserOutlined',
                component: '@/pages/User',
              },
              {
                path: '/goods',
                name:'goods',
                icon:'ShoppingOutlined',
                component: '@/pages/Goods',
              },
              {
                path: '/category',
                name:'category',
                icon:'ShoppingOutlined',
                component: '@/pages/Category',
              },
              {
                path: '/order',
                name:'order',
                icon:'ShoppingOutlined',
                component: '@/pages/Order',
              }, 
              //测试页面1
              {
                path: '/ceshi1',
                name:'ceshi1',
                icon:'ShoppingOutlined',
                component: '@/pages/ceshi1',
              }, 
              //测试页面2
              {
                path: '/ceshi2',
                name:'ceshi2',
                icon:'ShoppingOutlined',
                component: '@/pages/ceshi2',
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

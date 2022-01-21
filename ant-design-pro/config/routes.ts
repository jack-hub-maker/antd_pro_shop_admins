/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-11 20:55:46
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-20 15:18:08
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
                redirect: '/dashboard'
              },
              {
                path: '/dashboard',
                name: 'dashboard',
                icon: 'PieChartOutlined',
                component: '@/pages/DashBoard',
              },
              {
                path: '/user',
                name: 'user',
                icon: 'UserOutlined',
                component: '@/pages/User',
              },
              {
                path: '/goods',
                name: 'goods',
                icon: 'ShoppingOutlined',
                component: '@/pages/Goods',
              },
              {
                path: '/category',
                name: 'category',
                icon: 'ShoppingOutlined',
                component: '@/pages/Category',
              },
              {
                path: '/order',
                name: 'order',
                icon: 'ShoppingOutlined',
                component: '@/pages/Order',
              },
              //评价管理
              {
                path: '/comment',
                name: 'comment',
                icon: 'ShoppingOutlined',
                component: '@/pages/Comment/comment.tsx',
              },
              //菜单管理
              {
                path: '/menus',
                name: 'menus',
                icon: 'ShoppingOutlined',
                component: '@/pages/Menus/menus.tsx',
              },
              //three.js 3d页面
              // {
              //   path: '/three',
              //   name: 'three',
              //   icon: 'UserOutlined',
              //   component: '@/pages/Three/three.tsx',
              // },
              {
                path: '/three',
                name: 'three',
                icon: 'UserOutlined',
               routes:[
                {
                  path: '/three/three1',
                  name: 'three1',
                  component: '@/pages/Three/three1.tsx',
                },
                {
                  path: '/three/three2',
                  name: 'three2',
                  component: '@/pages/Three/three2.tsx',
                },
                {
                  path: '/three/three3',
                  name: 'three3',
                  component: '@/pages/Three/three3.tsx',
                },
                {
                  path: '/three/three4',
                  name: 'three4',
                  component: '@/pages/Three/three4.tsx',
                },
                {
                  path: '/three/three5',
                  name: 'three5',
                  component: '@/pages/Three/three5.tsx',
                },
               ]
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

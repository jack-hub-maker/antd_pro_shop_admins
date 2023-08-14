/*
 * @Descripttion:
 * @version: 1.0
 * @Author:
 * @Date: 2021-10-11 20:55:46
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-04-11 15:54:06
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
                redirect: '/dashboard',
              },
              {
                path: '/dashboard',
                name: 'dashboard',
                icon: 'PieChartOutlined',
                component: '@/pages/DashBoard',
                chineseName: '统计面板',
              },
              {
                path: '/user',
                name: 'user',
                icon: 'UserOutlined',
                component: '@/pages/User',
                chineseName: '用户列表',
              },
              {
                path: '/goods',
                name: 'goods',
                icon: 'ShoppingOutlined',
                component: '@/pages/Goods',
                chineseName: '商品列表',
              },
              {
                path: '/category',
                name: 'category',
                icon: 'ShoppingOutlined',
                component: '@/pages/Category',
                chineseName: '分类列表',
              },
              {
                path: '/order',
                name: 'order',
                icon: 'ShoppingOutlined',
                component: '@/pages/Order',
                chineseName: '订单列表',
              },
              //评价管理
              {
                path: '/comment',
                name: 'comment',
                icon: 'ShoppingOutlined',
                component: '@/pages/Comment/comment.tsx',
                chineseName: '评价管理',
              },
              //菜单管理
              {
                path: '/menus',
                name: 'menus',
                icon: 'ShoppingOutlined',
                component: '@/pages/Menus/menus.tsx',
                chineseName: '菜单管理',
              },
              //其他demo测试
              {
                path: '/HooksReact',
                name: 'HooksReact',
                icon: 'UserOutlined',
                chineseName: '其他测试',
                routes: [
                  {
                    path: '/HooksReact/demo1',
                    name: 'demo1',
                    component: '@/pages/HooksReact/demo1.tsx',
                    chineseName: '其他测试1',
                  },
                  {
                    path: '/HooksReact/demo2',
                    name: 'demo2',
                    component: '@/pages/HooksReact/demo2.tsx',
                    chineseName: '其他测试2',
                  },
                  {
                    path: '/HooksReact/demo3',
                    name: 'demo3',
                    component: '@/pages/HooksReact/demo3.tsx',
                    chineseName: 'calendar测试',
                  },
                ],
              },
              //3d测试
              {
                path: '/three',
                name: 'three',
                icon: 'UserOutlined',
                chineseName: '3d测试',
                routes: [
                  {
                    path: '/three/three1',
                    name: 'three1',
                    component: '@/pages/Three/three1.tsx',
                    chineseName: '3d测试1',
                  },
                  {
                    path: '/three/three2',
                    name: 'three2',
                    component: '@/pages/Three/three2.tsx',
                    chineseName: '3d测试2',
                  },
                  {
                    path: '/three/three3',
                    name: 'three3',
                    component: '@/pages/Three/three3.tsx',
                    chineseName: '3d测试3',
                  },
                  {
                    path: '/three/three4',
                    name: 'three4',
                    component: '@/pages/Three/three4.tsx',
                    chineseName: '3d测试4',
                  },
                  {
                    path: '/three/three5',
                    name: 'three5',
                    component: '@/pages/Three/three5.tsx',
                    chineseName: '3d测试5',
                  },
                  {
                    path: '/three/three6',
                    name: 'three6',
                    component: '@/pages/Three/three6.tsx',
                    chineseName: '3d测试6',
                  },
                  {
                    path: '/three/three7',
                    name: 'three7',
                    component: '@/pages/Three/three7.tsx',
                    chineseName: '3d测试7',
                  },
                  {
                    path: '/three/three8',
                    name: 'three8',
                    component: '@/pages/Three/three8.tsx',
                    chineseName: '测试8',
                  },
                  {
                    path: '/three/three9',
                    name: 'three9',
                    component: '@/pages/Three/three9.tsx',
                    chineseName: '测试9',
                  },
                  {
                    path: '/three/moveModal',
                    name: 'moveModal',
                    component: '@/pages/Three/moveModal',
                    chineseName: '测试moveModal',
                  },
                  {
                    path: '/three/Hoc',
                    name: 'Hoc',
                    component: '@/pages/Three/Hoc',
                    chineseName: '测试Hoc',
                  },
                ],
              },
              {
                path: '/fontHighLight',
                name: 'fontHighLight',
                icon: 'UserOutlined',
                chineseName: '关键词高亮',
                routes: [
                  {
                    path: '/fontHighLight/high1',
                    name: 'high1',
                    component: '@/pages/FontHighLight/high1.tsx',
                    chineseName: '关键词高亮1',
                  },
                  {
                    path: '/fontHighLight/high2',
                    name: 'high2',
                    component: '@/pages/FontHighLight/high2.tsx',
                    chineseName: '关键词高亮2',
                  },
                ],
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

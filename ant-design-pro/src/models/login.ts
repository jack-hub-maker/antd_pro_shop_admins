/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-12 09:56:49
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-13 14:48:27
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\models\login.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import { stringify } from 'querystring';
import type { Reducer, Effect } from 'umi';
import { history } from 'umi';

import { fakeAccountLogin, logout } from '@/services/login';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { message } from 'antd';

export type StateType = {
  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
};

export type LoginModelType = {
  namespace: string;
  state: StateType;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    changeLoginStatus: Reducer<StateType>;
  };
};

const Model: LoginModelType = {
  namespace: 'login',

  state: {
  },

  effects: {
    *login({ payload }, { call, put }) {
      //发送请求执行登录
      const response = yield call(fakeAccountLogin, payload);
      console.log('response:', response);
      //判断是否登陆成功
      if (response.status === undefined) {
        message.success('登陆成功')
        yield put({
          type: 'changeLoginStatus',
          payload: response,
        }); // Login successfully

        //跳转到首页
        history.replace('/');
      }
      // if (response.status === 'ok') {
      //   const urlParams = new URL(window.location.href);
      //   const params = getPageQuery();
      //   message.success('🎉 🎉 🎉  登录成功！');
      //   let { redirect } = params as { redirect: string };
      //   if (redirect) {
      //     const redirectUrlParams = new URL(redirect);
      //     if (redirectUrlParams.origin === urlParams.origin) {
      //       redirect = redirect.substr(urlParams.origin.length);
      //       if (window.routerBase !== '/') {
      //         redirect = redirect.replace(window.routerBase, '/');
      //       }
      //       if (redirect.match(/^\/.*#/)) {
      //         redirect = redirect.substr(redirect.indexOf('#') + 1);
      //       }
      //     } else {
      //       window.location.href = '/';
      //       return;
      //     }
      //   }
      //   history.replace(redirect || '/');
      // }
    },

    //退出登录
    *logout(_, { call, put }) {
      //loading
      const load = message.loading('退出中')
      //请求api，退出登陆
      const response = yield call(logout)
      //判断是否退出成功
      if (response.status === undefined) {
        //删除本地缓存和token
        localStorage.removeItem('access_token')
        localStorage.removeItem('userInfo')
        message.success('退出成功')
        history.replace('/login')

      }
      load()

      const { redirect } = getPageQuery();
      // Note: There may be security issues, please note
      if (window.location.pathname !== '/login' && !redirect) {
        history.replace({
          pathname: '/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      // setAuthority(payload.access_token);
      //将token存入locallstorage里 
      localStorage.setItem('access_token', JSON.stringify(payload.access_token));
      return {
        ...state,
      };
    },
  },
};

export default Model;

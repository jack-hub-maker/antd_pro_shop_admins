/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-04-01 17:08:00
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-04-11 14:44:39
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/models/connect.d.ts
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import type { MenuDataItem, Settings as ProSettings } from '@ant-design/pro-layout';
import { GlobalModelState } from './global';
import { UserModelState } from './user';
import { CodeTableDataInfoState } from './codeTable';
import { MenuModelState } from './menu';
import type { StateType } from './login';
export { GlobalModelState, UserModelState };

export type Loading = {
  global: boolean;
  effects: Record<string, boolean | undefined>;
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
};

export type ConnectState = {
  global: GlobalModelState;
  loading: Loading;
  settings: ProSettings;
  user: UserModelState;
  login: StateType;
  codeTable: CodeTableDataInfoState;
  menu: MenuModelState;
};

export type Route = {
  routes?: Route[];
} & MenuDataItem;

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-11 20:55:46
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-11 20:57:25
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/config/defaultSettings.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '折一束花',
  pwa: false,
  iconfontUrl: '',
};

export type { DefaultSettings };

export default proSettings;

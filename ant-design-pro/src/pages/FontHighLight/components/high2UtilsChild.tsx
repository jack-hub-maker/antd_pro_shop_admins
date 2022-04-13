/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-04-13 13:56:50
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-04-13 13:56:50
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/FontHighLight/components/high2UtilsChild.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import React,{useContext} from 'react'
import { ColorContext } from '../high2'

const Child = () => {
    const color = useContext(ColorContext)
    return (
      <div style={{ backgroundColor: color }}>Background color is: { color }</div>
    )
  }

export default Child
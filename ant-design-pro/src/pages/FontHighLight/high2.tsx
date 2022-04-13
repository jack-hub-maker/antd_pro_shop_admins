/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-04-01 17:18:41
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-04-13 13:58:01
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/FontHighLight/high2.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import React, { useContext } from 'react'
import Father from './components/high2Utils'

export const ColorContext = React.createContext<any>('')

const App = () => {

    // const Child = () => {
    //     const color = useContext(ColorContext)
    //     return (
    //       <div style={{ backgroundColor: color }}>Background color is: { color }</div>
    //     )
    //   }

    return (
        <ColorContext.Provider value='#1890ff'>
            <Father />
        </ColorContext.Provider>
    )
}

export default App


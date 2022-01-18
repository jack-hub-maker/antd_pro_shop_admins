/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-11-13 15:43:49
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-11-15 10:41:45
 * @FilePath: /11.4react/antd_pro_shop_admins/ant-design-pro/src/pages/ceshi1.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React,{useState,useEffect,memo,useMemo,useCallback} from 'react';


export  default  function Counter6(){
    const [count, setCount] = useState(0)
    if(7< 5){
       useEffect(() => {
            console.log('use effect...',count)
            const timer = setInterval(() => setCount(count +1), 1000)
            return ()=> clearInterval(timer)
        }) 
    }
    

    return (
        <div>1</div>
    )
}

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-02-18 11:06:26
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-02-18 14:09:19
 * @FilePath: /ant-pro-V4前端模版/ant-design-pro-V4/src/hooks/component/useThrottle.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import { useEffect, useRef, useState } from 'react'

//自定义节流hooks
// 示例
// import { useState } from 'react'
// import { useDebounce, useThrottle } from '@/hooks'
// export default () => {
//     const [a, setA] = useState(0)
//     const [b, setB] = useState(0)
//     const [cancel] = useDebounce(() => {
//         setB(a)
//     }, 2000, [a])
    
//     // const [cancel] = useThrottle(() => {
//     //     setB(a)
//     // }, 2000, [a])
//     const changeIpt = (e: any) => {
//         setA(e.target.value)
//     }
//     return <div>
//         <input type="text" onChange={changeIpt} />
//         {b} {a}
//     </div>
// }
export const useThrottle = (fn: any, ms = 30, deps: any = []) => {
    let previous = useRef(0)
    let [time, setTime] = useState(ms)
    useEffect(() => {
        let now = Date.now();
        if (now - previous.current > time) {
            fn();
            previous.current = now;
        }
    }, deps)

    const cancel = () => {
        setTime(0)
    }

    return [cancel]
}

// export default useThrottle

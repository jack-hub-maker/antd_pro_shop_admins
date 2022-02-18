/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-02-18 10:30:34
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-02-18 14:09:04
 * @FilePath: /ant-pro-V4前端模版/ant-design-pro-V4/src/hooks/component/useDebounce.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import { useEffect, useRef } from 'react'

//自定义防抖hooks
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
export const useDebounce = (fn: any, ms = 30, deps: any = []) => {
    let timeout: any = useRef()
    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            fn()
        }, ms)
    }, deps)

    const cancel = () => {
        clearTimeout(timeout.current)
        timeout = null
    }

    return [cancel]
}

// export default useDebounce

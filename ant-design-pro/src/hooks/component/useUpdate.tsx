/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-02-18 11:16:31
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-02-18 14:14:15
 * @FilePath: /ant-pro-V4前端模版/ant-design-pro-V4/src/hooks/component/useUpdate.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import { useState } from 'react'

//自定义更新hooks
// 我们知道如果想让组件重新渲染，我们不得不更新state，但是有时候业务需要的state是没必要更新的，
// 我们不能仅仅为了让组件会重新渲染而强制让一个state做无意义的更新，所以这个时候我们就可以自定义一个更新的hooks来优雅的实现组件的强制更新
export const useUpdate = () => {
    const [, setFlag] = useState<number>()
    const update = () => {
        setFlag(Date.now())
    }

    return update
}

// export default useUpdate

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-02-18 09:50:58
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-02-18 14:11:37
 * @FilePath: /ant-pro-V4前端模版/ant-design-pro-V4/src/hooks/component/usePrevious.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */


import { useState, useEffect, useRef } from 'react'

//用于返回先前状态的 Hook。
//示例：
// import { useState } from 'react'
// import { usePrevious, useWinSize } from '@/hooks'
// export default () => {
//     const [value, setValue] = useState(0);
//     const lastValue = usePrevious(value);

//     const size = useWinSize();
//     return <div>
//         <span>-------------</span>
//         页面大小: `{size.width}*{size.height}`
//         <div>
//             <p>Current: {value} - Previous：{lastValue}</p>
//             <button onClick={() => setValue(value + 1)}> Increment Money</button>
//         </div>
//     </div>
// }

export const usePrevious = (value: any) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

// export default usePrevious

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-02-18 10:13:45
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-02-18 14:13:25
 * @FilePath: /ant-pro-V4前端模版/ant-design-pro-V4/src/hooks/component/useWinSize.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import { useState, useCallback, useEffect } from "react";

//获取当前页面尺寸的hooks
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
export const useWinSize = () => {
  // 1. 使用useState初始化窗口大小state
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const changeSize = useCallback(() => {
    // useCallback 将函数缓存起来 节流
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  }, []);
  // 2. 使用useEffect在组件创建时监听resize事件，resize时重新设置state (使用useCallback节流)
  useEffect(() => {
    //绑定一次页面监听事件 组件销毁时解绑
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  return size;
};
// export default useWinSize
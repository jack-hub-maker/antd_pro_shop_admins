/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-02-18 11:23:05
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-02-18 14:39:38
 * @FilePath: /ant-pro-V4前端模版/ant-design-pro-V4/src/hooks/component/useScroll.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import { useState, useEffect } from 'react'

//自定义滚动条hooks
//感觉不太好用。。。还是用ahooks的useScroll比较好用
// 自定义的useScroll也是高频出现的问题之一，我们往往会监听一个元素滚动位置的变化来决定展现那些内容
// export const useScroll = () => {
//     const [scrollPosition, setScrollPosition] = useState(0);
//     // 页面加载完成之后，做个监听。
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollPosition(window.scrollY)
//         }
//         document.addEventListener("scroll", handleScroll);
//         return () => {
//             document.removeEventListener("scroll", handleScroll)
//         }
//     }, [])
//     console.log('‘scrollPosition：',scrollPosition);

//     return scrollPosition;
// }

export const useScroll = (scrollRef: any) => {
    const [pos, setPos] = useState([0, 0])

    useEffect(() => {
        function handleScroll(e: any) {
            setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop])
        }
        scrollRef.current.addEventListener('scroll', handleScroll, false)
        return () => {
            scrollRef.current.removeEventListener('scroll', handleScroll, false)
        }
    }, [])
    console.log('pos:',pos);
    
    return pos
}

// export default useScroll




// export default useScroll

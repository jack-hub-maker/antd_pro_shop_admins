/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-02-18 14:00:27
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-02-18 14:07:54
 * @FilePath: /ant-pro-V4前端模版/ant-design-pro-V4/src/hooks/component/useImageLazy.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import { useState, useEffect, useRef } from 'react'
import { useThrottle } from './useThrottle'

//图片懒加载hooks
// // 示例：
// import { useRef } from 'react'
// import { useImageLazy } from '@/hooks'

// const imgList = Array.from({ length: 8 }, (item, index) =>
//     (item = `https://www.maojiemao.com/public/svg/gen${index + 5}.png`))

// const style = {
//     display: 'block',
//     width: '300px',
//     height: '300px',
//     marginTop: '50px',
// }

// export default (props: any) => {
//     const domRef: any = useRef([])
//     useImageLazy(domRef.current)

//     return (
//         <>
//             {imgList.map((item, index) => (
//                 <img
//                     ref={el => domRef.current[index] = el}
//                     key={`lazy-${index}`}
//                     data-src={item}
//                     style={style} />
//             ))}
//         </>
//     )

// }


export const useImageLazy = (domList: any) => {
    const [scrollCount, setScrollCount] = useState(0)

    const savedCallback: any = useRef()

    const getTop = () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
        let len = domList.length

        for (let i = 0; i < len; i++) {
            let { top } = domList[i].getBoundingClientRect()
            if (top < (scrollTop + clientHeight)) {
                domList[i].src = domList[i].dataset.src
                domList.splice(i, 1)
                i--;
                len--;
            }
        }
    }

    const scrollEvent = () => {
        setScrollCount(scrollCount + 1)
    }

    useEffect(() => {
        savedCallback.current = scrollEvent
    })

    useEffect(() => {
        let tick = () => { savedCallback.current() }
        document.addEventListener('scroll', tick)

        return () => {
            document.removeEventListener('scroll', tick)
        }
    }, [])

    useThrottle(() => {
        getTop()
    }, 200, [scrollCount])

}

// export default useImageLazy

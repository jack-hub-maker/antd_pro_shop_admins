/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-04-01 17:18:36
 * @LastEditors: YingJie Xing
<<<<<<< Updated upstream
 * @LastEditTime: 2022-04-02 16:25:21
=======
 * @LastEditTime: 2022-04-02 10:14:16
>>>>>>> Stashed changes
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/FontHighLight/high1.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import { MyButton } from '@/components/myComponents';
import Input from 'antd/lib/input/Input';
import React, { useState } from 'react'
import ReactDOM from "react-dom";
import Highlighter from "react-highlight-words";

const high1 = () => {
    const [searchConnect, setsearchConnect] = useState<any>([])
    const seachWay = (e: any) => {
        console.log(e.target.value);
        setsearchConnect([e.target.value])
        // setsearchConnect(['j'])
        console.log('666');
        
        return
    }
    return (
        <div>
            <Input
                value={searchConnect}
                onChange={(a) => { seachWay(a) }}
            />
            {/* <MyButton
                text="编研"
                fileProps={{
                    type: 'link',
                    onClick: (e) => { seachWay(e) }
                }}
            /> */}
            <Highlighter
                highlightClassName="YourHighlightClass" //样式
                // searchWords={["and", "or", "the"]}
                caseSensitive={true} //是否区分大小写，默认值为false不区分
                searchWords={searchConnect} //搜索词数组。除非autoEscape为真，否则字符串搜索词会自动转换为正则表达式。
                autoEscape={true} //关键词中在正则表达式中有意义的转义字符
                textToHighlight="牛的啊 啊，The dog is chasing the cat. Or perhaps they're just playing?"
            />
        </div>
    )
}

export default high1

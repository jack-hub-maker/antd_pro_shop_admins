/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-01-20 15:07:42
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-04-13 16:08:53
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Three/three4.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import React, { Component } from 'react';
import emitter from '@/utils/events';

class List2 extends Component {
    handleClick = (message: any) => {
        emitter.emit('changeMessage', message);
    };
    handleReset = (message: any) => {
        emitter.emit('reset', message);
    };
    render() {
        return (
            <div>
                 <button onClick={()=>{this.handleClick('变成了List2')}}>点击我改变3d测试5List1组件中显示信息</button>
                <button  onClick={()=>{this.handleReset('还原List1')}}>点击我还原3d测试5List1组件中显示信息</button>
            </div>
        );
    }
}
export default List2;


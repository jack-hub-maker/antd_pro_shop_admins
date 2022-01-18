/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-01-18 17:14:06
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-18 17:50:21
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Order/components/DetaiModal.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef, useState, useEffect } from 'react'
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Form, Modal, message, Skeleton } from 'antd';
import { detailOrders } from '@/services/order'
// import ProList from '@ant-design/pro-list';
const DetaiModal = (props: any) => {
    const [detailData, setDetailData] = useState({})
    const getMyOrders = async () => {
        const res = await detailOrders(props?.id)
        console.log('订单详情res：', res);
        setDetailData(res)
    }
    useEffect(() => {
        getMyOrders()
    }, [])
    return (
        <div>1</div>
        // <ProList
        //     rowKey="name"
        //     headerTitle="基础列表"
        //     tooltip="基础列表的配置"
        //     dataSource={[{
        //         name: '语雀的天空',
        //         image:
        //           'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        //         desc: '我是一条测试的描述',
        //       },
        //       {
        //         name: 'Ant Design',
        //         image:
        //           'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        //         desc: '我是一条测试的描述',
        //       },]}
        //     showActions="hover"
        //     showExtra="hover"
        // >
        // </ProList>
    )
}

export default DetaiModal

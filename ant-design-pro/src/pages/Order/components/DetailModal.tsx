/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-01-18 17:14:06
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-19 10:57:13
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Order/components/DetaiModal.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef, useState, useEffect } from 'react'
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { List, Avatar, Form, Modal, message } from 'antd';
import { detailOrders } from '@/services/order'
// import ProList from '@ant-design/pro-list';
const DetaiModal = (props: any) => {
    const [detailData, setDetailData] = useState({})
    const getMyOrders = async () => {
        const res = await detailOrders(props?.chooseRecord?.id)
        console.log('订单详情res：', res);
        setDetailData(res)
    }
    useEffect(() => {
        console.log('props:', props);
        getMyOrders()
    }, [])
    let imgDatas = []
    detailData?.goods?.data.forEach((item: any) => {
        detailData?.orderDetails?.data.forEach((items: any) => {
            imgDatas.push({
                title: item.title,
                image: item.cover_url,
                price: items.price,
                num: items.num,
                amount: items.num * items.price,
            })
        })
    })
    return (
        <List
            itemLayout="horizontal"
            dataSource={imgDatas}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.image} />}
                        title={item.title}
                        description={`单价：${item.price};数量：${item.num};总价：${item.amount}`}
                    // description={`单价：${detailData?.orderDetails?.data[0].price};数量：${detailData?.orderDetails?.data[0].num};总价：${detailData?.orderDetails?.data[0].price}`}
                    />
                </List.Item>
            )}
        />
    )
}

export default DetaiModal

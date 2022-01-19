/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-18 11:01:04
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-19 11:21:58
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Order/index.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useState, useEffect, useRef } from 'react'
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Tag, Card, Form, Modal, Button, Avatar, Switch, message, Space } from 'antd';
import { PlusOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { getOrders } from '@/services/order'
import DetailModal from './components/DetailModal'
import OpenGoodsModal from './components/OpenGoodsModal'
import { MyButton, OptionButton } from '@/components/myComponents';
type GithubIssueItem = {
    url: string;
    id: number;
    number: number;
    title: string;
    labels: {
        name: string;
        color: string;
    }[];
    state: string;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at?: string;
};

const index = () => {
    const actionRef = useRef<ActionType>();
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const [isOpenVisible, setIsOpenVisible] = useState(false);
    const [chooseRecord, setchooseRecord] = useState({});

    const columns: ProColumns<GithubIssueItem>[] = [
        {
            title: '单号',
            dataIndex: 'order_no',
        },

        {
            title: '创建者',
            dataIndex: 'user_id',
            hideInSearch: true,
        },
        {
            title: '金额',
            dataIndex: 'amount',
            hideInSearch: true,
        },
        {
            title: '状态',
            dataIndex: 'status',
            // hideInSearch: true,
            valueEnum: {
                1: { text: '已下单', status: 'Processing', },
                2: { text: '已支付', status: 'Success', },
                3: { text: '已发货', status: 'Success', },
                4: { text: '已收货', status: 'Success', },
                5: { text: '已过期', status: 'Error', },
            },
            // render:(_, record: any) =>[
            //     record.status==1?<Tag color="blue">下单</Tag>:''
            // ]
        },
        {
            title: '收货地址',
            dataIndex: 'address_id',
            hideInSearch: true,
        },
        {
            title: '支付时间',
            dataIndex: 'updated_at',
            hideInSearch: true,
        },
        {
            title: '支付类型',
            dataIndex: 'pay_type',
            hideInSearch: true,
        },
        {
            title: '支付流水号',
            dataIndex: 'address_id',
            hideInSearch: true,
        },
        {
            title: '操作',
            valueType: 'option',
            key: 'options',
            width: 200,
            render: (text, record, _, action) => [
                <OptionButton key='a'>
                    <MyButton
                        text='详情'
                        fileProps={{
                            type: 'link',
                            onClick: () => {
                                setchooseRecord(record)
                                setIsModalVisible(true)
                            }
                        }}
                    />
                    <MyButton
                        text='发货'
                        fileProps={{
                            type: 'link',
                            onClick: () => {
                                setchooseRecord(record)
                                setIsOpenVisible(true)
                            }
                        }}
                    />
                </OptionButton>
            ],
        },
    ];
    //启用禁用
    const handleLockUser = async (record: any) => {
        const res = await lockUser(record.id)
        //console.log(res);
        if (res.status === undefined) {
            message.success('操作成功')
        }
    }
    //控制模态框显示隐藏
    const isShowModal = (show: boolean, editId?: any) => {
        setIsOpenVisible(show)
    }
    //获取用户数据
    const getData = async (params: any) => {
        const response = await getOrders(params)
        console.log(response);
        return {
            // 取response的records部分为列表数组数据
            data: response.data,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: true,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: response.meta.pagination.total,
        };
    }

    return (
        <PageContainer>
            <Card>
                <ProTable<GithubIssueItem>
                    columns={columns}
                    actionRef={actionRef}
                    request={(params, sort, filter) => getData(params)}
                    rowKey="id"
                    search={{
                        labelWidth: 'auto',
                    }}
                    pagination={{
                        pageSize: 10,
                    }}
                    dateFormatter="string"
                    headerTitle="订单列表"
                    toolBarRender={() => []}
                />

                {!isModalVisible ? '' :
                    <Modal
                        title='订单详情'
                        visible={isModalVisible}
                        footer={null}
                        onCancel={() => setIsModalVisible(false)}
                        destroyOnClose={true}
                    >
                        <DetailModal
                            chooseRecord={chooseRecord}
                        />
                    </Modal>
                }

                {!isOpenVisible ? '' :
                     <OpenGoodsModal
                     isOpenVisible={isOpenVisible}
                     chooseRecord={chooseRecord}
                     isShowModal={isShowModal}
                     actionRef={actionRef}
                 />
                }
            </Card>
        </PageContainer>
    )
}

export default index

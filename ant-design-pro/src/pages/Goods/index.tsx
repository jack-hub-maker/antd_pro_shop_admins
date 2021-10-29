/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-13 19:22:52
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-28 15:38:21
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\pages\Goods\index.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useState, useEffect, useRef } from 'react'
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Card, Form, Modal, Button, Image, Switch, message } from 'antd';
import { PlusOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { getGoods, isOn, isRecommend } from '@/services/goods'
// import Create from './components/Create'
import CreateOrEdit from './components/CreateOrEdit'
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
    const [editId, setEditId] = useState(undefined);
    const columns: ProColumns<GithubIssueItem>[] = [
        {
            title: '商品图',
            dataIndex: 'cover_url',
            hideInSearch: true,
            render: (_, record: any) => (
                <Image
                    src={record.cover_url}
                    width={64}
                    placeholder={
                        <Image
                            preview={false}
                            src={record.cover_url}
                            width={200}
                        />
                    }
                />
            )
        },
        {
            title: '标题',
            dataIndex: 'title',
        },
        {
            title: '价格',
            dataIndex: 'price',
            hideInSearch: true,
        },
        {
            title: '库存',
            dataIndex: 'stock',
            hideInSearch: true,
        },
        {
            title: '销量',
            dataIndex: 'sales',
            hideInSearch: true,
        },
        {
            title: '是否上架',
            dataIndex: 'is_on',
            render: (_, record: any) =>
                <Switch
                    checkedChildren="已上架"
                    unCheckedChildren="未上架"
                    defaultChecked={record.is_on === 1}
                    onChange={() => {
                        handleIsOn(record)
                    }}
                />,
            valueType: 'radioButton',
            valueEnum: {
                1: { text: '已上架' },
                0: { text: '未上架' },
            }
        },
        {
            title: '是否推荐',
            dataIndex: 'is_recommend',
            render: (_, record: any) =>
                <Switch
                    checkedChildren="已推荐"
                    unCheckedChildren="未推荐"
                    defaultChecked={record.is_recommend === 1}
                    onChange={() => {
                        handleIsRecommend(record)
                    }}
                />,
            valueType: 'radioButton',
            valueEnum: {
                1: { text: '已推荐' },
                0: { text: '未推荐' },
            }
        },
        {
            title: '创建时间',
            dataIndex: 'created_at',
            hideInSearch: true,
        },


        {
            title: '操作',
            valueType: 'option',
            render: (text, record, _, action) => [
                <a
                    key="editable"
                    onClick={() => {
                        isShowModal(true, record.id)
                    }}
                >
                    编辑
                </a>
            ],
        },
    ];
    //上架下架商品
    const handleIsOn = async (record: any) => {
        const res = await isOn(record.id)
        //console.log(res);
        if (res.status === undefined) {
            message.success('操作成功')
        }
    }
    //推荐不推荐商品
    const handleIsRecommend = async (record: any) => {
        const res = await isRecommend(record.id)
        //console.log(res);
        if (res.status === undefined) {
            message.success('操作成功')
        }
    }
    //控制模态框显示隐藏
    const isShowModal = (show: boolean, editId?: any) => {
        setEditId(editId)
        setIsModalVisible(show)
    }
    //获取商品数据
    const getData = async (params: any) => {
        const response = await getGoods(params)
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
                        defaultCollapsed:false
                    }}
                    pagination={{
                        pageSize: 10,
                    }}
                    dateFormatter="string"
                    headerTitle="商品列表"
                    toolBarRender={() => [
                        <Button key="button"
                            icon={<PlusOutlined />}
                            type="primary"
                            onClick={() => isShowModal(true)}>
                            新建
                        </Button>
                    ]}
                />

                {!isModalVisible ? '' :
                    <CreateOrEdit
                        isModalVisible={isModalVisible}
                        isShowModal={isShowModal}
                        actionRef={actionRef}
                        editId={editId}
                    />
                }
            </Card>
        </PageContainer>
    )
}

export default index

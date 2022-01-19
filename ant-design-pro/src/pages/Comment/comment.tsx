/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-11-13 15:43:49
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-19 17:13:54
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Comment/comment.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useState, useEffect, useRef } from 'react'
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Tag, Card, Form, Modal, Button, Avatar, Switch, message, Space } from 'antd';
import { PlusOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { getComment } from '@/services/comment'
import { MyButton, OptionButton,MyProTable } from '@/components/myComponents';
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

const Comment = () => {
    const actionRef = useRef<ActionType>();
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const [isOpenVisible, setIsOpenVisible] = useState(false);
    const [chooseRecord, setchooseRecord] = useState({});

    const columns: ProColumns<GithubIssueItem>[] = [
        {
            title: '创建者',
            dataIndex: 'user_id',
            hideInSearch: true,
        },
        {
            title: '级别',
            dataIndex: 'rate',
            // hideInSearch: true,
            valueEnum: {
                1: { text: '好评', status: 'Success', },
                2: { text: '中评', status: 'Processing', },
                3: { text: '差评', status: 'Error', },
            },
        },
        {
            title: '评价内容',
            dataIndex: 'content',
            hideInSearch: true,
        },
        {
            title: '修改时间',
            dataIndex: 'updated_at',
            hideInSearch: true,
        },
        {
            title: '添加时间',
            dataIndex: 'created_at',
            hideInSearch: true,
        },
        {
            title: '回复内容',
            dataIndex: 'reply',
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
                </OptionButton>
            ],
        },
    ];
    //启用禁用
    //控制模态框显示隐藏
    const isShowModal = (show: boolean, editId?: any) => {
        setIsOpenVisible(show)
    }
    //获取用户数据
    const getData = async (params: any) => {
        const response = await getComment(params)
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
                {/* <ProTable<GithubIssueItem>
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
                    headerTitle="评价列表"
                    toolBarRender={() => []}
                /> */}
            <MyProTable
                  fileProps={{
                    // bordered: true,
                    actionRef,
                    headerTitle:'评价列表',
                    request: (params) => getData(params),
                    columns,
                    search: {
                        labelWidth: 'auto',
                    },
                  }}
            />
            </Card>
        </PageContainer>
    )
}

export default Comment

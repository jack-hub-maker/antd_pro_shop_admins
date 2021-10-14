/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-13 19:22:52
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-14 13:11:35
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\pages\User\index.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useState, useEffect, useRef } from 'react'
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Button, Avatar, Switch, Menu, Dropdown } from 'antd';
import { PlusOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { getUsers, lockUser } from '@/services/user'

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

const columns: ProColumns<GithubIssueItem>[] = [
    {
        title: '头像',
        dataIndex: 'avatar_url',
        hideInSearch: true,
        render: (_, record: any) => (
            <Avatar src={record.avatar_url} size={32} icon={<UserOutlined />} />
        )
    },
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
    },
    {
        title: '是否禁用',
        dataIndex: 'is_locked',
        hideInSearch: true,
        render: (_, record: any) =>
            <Switch
                checkedChildren="启用"
                unCheckedChildren="禁用"
                defaultChecked={record.is_locked === 0}
                onChange={async () => {
                    await lockUser(record.id)
                    //console.log(record.id);

                }}
            />
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

                    // action?.startEditable?.(record.id);
                }}
            >
                编辑
            </a>
            // <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
            //     查看
            // </a>,
        ],
    },
];


const index = () => {
    const actionRef = useRef<ActionType>();


    const getData = async (params: any) => {
        const response = await getUsers(params)
        console.log(response);
        return {
            // 取response的records部分为列表数组数据
            data: response.data,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: true,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: response.meta.pagination,
        };

    }
    return (
        <PageContainer>
            <Card>
                <ProTable<GithubIssueItem>
                    columns={columns}
                    actionRef={actionRef}
                    request={(params, sort, filter) => getData(params)}
                    // request={async (params = {}, sort, filter) => {
                    //     console.log(sort, filter);
                    //     getUsers()
                    //     // return request<{
                    //     //     data: GithubIssueItem[];
                    //     // }>
                    //     // ('https://proapi.azurewebsites.net/github/issues', {
                    //     //     params,
                    //     // });
                    // }}

                    // editable={{
                    //     type: 'multiple',
                    // }}
                    // columnsState={{
                    //     persistenceKey: 'pro-table-singe-demos',
                    //     persistenceType: 'localStorage',
                    // }}
                    rowKey="id"
                    search={{
                        labelWidth: 'auto',
                    }}
                    // form={{
                    //     // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
                    //     syncToUrl: (values, type) => {
                    //         if (type === 'get') {
                    //             return {
                    //                 ...values,
                    //                 created_at: [values.startTime, values.endTime],
                    //             };
                    //         }
                    //         return values;
                    //     },
                    // }}
                    pagination={{
                        pageSize: 10,
                    }}
                    dateFormatter="string"
                    headerTitle="用户列表"
                    toolBarRender={() => [
                        <Button key="button" icon={<PlusOutlined />} type="primary">
                            新建
                        </Button>
                    ]}
                />
            </Card>
        </PageContainer>
    )
}

export default index

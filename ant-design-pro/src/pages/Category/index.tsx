/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-18 10:59:48
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-18 16:44:42
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Category/index.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useState, useEffect, useRef } from 'react'
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Card, Form, Modal, Button, Avatar, Switch, message } from 'antd';
import { PlusOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { getUsers, lockUser } from '@/services/user'
import { getCategory ,isStatus} from '@/services/category'
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
            title: '分类名称',
            dataIndex: 'name',
            hideInSearch: true
        },
        {
            title: '是否禁用',
            dataIndex: 'status',
            hideInSearch: true,
            render: (_, record: any) =>
                <Switch
                    checkedChildren="未禁用"
                    unCheckedChildren="禁用"
                    defaultChecked={record.status === 1}
                    onChange={() => {
                        handleIsStatus(record)
                    }}
                />,
            valueType: 'radioButton',
            valueEnum: {
                1: { text: '未禁用' },
                0: { text: '禁用' },
            }
        },
        {
            title: '操作',
            valueType: 'option',
            hideInSearch: true,
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
       //禁用分类
       const handleIsStatus = async (record: any) => {
        const res = await isStatus(record.id)
        //console.log(res);
        if (res.status === undefined) {
            message.success('操作成功')
        }
    }
    //控制模态框显示隐藏
    const isShowModal = (show: boolean, editId: any) => {
        console.log('点击到editId:',editId);
        
        setEditId(editId)
        setIsModalVisible(show)
    }
    //获取用户数据
    const getData = async (params: any) => {
        const response = await getCategory(params)
        console.log(response);
        return {
            // 取response的records部分为列表数组数据
            data: response,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: true,
            // 不传会使用 data 的长度，如果是分页一定要传
            // total: response.meta.pagination.total,
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
                    // expandable={{
                    //     expandedRowRender: record => <p style={{ margin: 0 }}>{'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'}</p>,
                    //     rowExpandable: record => record.name !== 'Not Expandable',
                    //   }}
                    pagination={{
                        pageSize: 10,
                    }}
                    search={false}
                    dateFormatter="string"
                    headerTitle="分类列表"
                    toolBarRender={() => [
                        <Button key="button"
                            icon={<PlusOutlined />}
                            type="primary"
                            onClick={() => isShowModal(true,null)}>
                            新建分类
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


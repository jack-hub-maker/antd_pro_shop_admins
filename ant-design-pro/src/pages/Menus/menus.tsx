/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-11-13 15:44:10
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-04-11 16:18:10
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Menus/menus.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useState, useEffect, useRef } from 'react'
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Tag, Card, Form, Modal, Button, Avatar, Switch, message, Space } from 'antd';
import { PlusOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { getMenus } from '@/services/menus'
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

const Menus = () => {
    const actionRef = useRef<ActionType>();
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const [isOpenVisible, setIsOpenVisible] = useState(false);
    const [chooseRecord, setchooseRecord] = useState({});

    const columns: ProColumns<GithubIssueItem>[] = [
        {
            title: '父级',
            dataIndex: 'level',
            hideInSearch: true,
        },
        {
            title: '名称',
            dataIndex: 'name',
            hideInSearch: true,
        },
        {
            title: '层级',
            dataIndex: 'level',
            hideInSearch: true,
        },
        {
            title: '状态',
            dataIndex: 'status',
            valueEnum: {
              1: { text: '禁用', status: 'Error', },
              0: { text: '正常', status: 'Success', },
          },
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

    //获取用户数据
    const getData = async (params: any) => {
        const response = await getMenus(params)
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
        <div>
            <Card>
            <MyProTable
                  fileProps={{
                    // bordered: true,
                    actionRef,
                    headerTitle:'菜单列表',
                    request: (params) => getData(params),
                    columns,
                    search: {
                        labelWidth: 'auto',
                    },
                  }}
            />
            </Card>
        </div>
    )
}

export default Menus


/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-15 13:37:27
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-15 16:10:46
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\pages\User\components\Create.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef, useState, useEffect } from 'react'
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Form, Modal, message, Skeleton } from 'antd';
import { addUser, updateUser, showUser } from '@/services/user'
import { FormInstance } from 'antd/es/form'

const Create = (props: any) => {
    const { isModalVisible } = props
    const { isShowModal } = props
    const { actionRef } = props
    const { modalName } = props
    const { editId } = props
    const formRef = React.createRef<FormInstance>();
    const [initialValues, setInitialValues] = useState({})
    console.log(editId, 'editId');
    useEffect(() => {
        if (editId) {
            getshowUser()

        }
    }, [editId])
    // useEffect(() => {
    //     formRef.current?.resetFields();
    //     if (editId) {
    //         getshowUser()
    //     }
    // }, [isShowModal])
    const getshowUser = (async () => {
        console.log("执行次数:");
        const res = await showUser(editId)
        // console.log("res:", res);
        formRef.current?.setFieldsValue({
            name: res.name,
            email: res.email
        })


    })
    const createUser = async (values: any) => {
        console.log(values);
        // message.success('提交成功');
        // const response = await addUser(values)
        if (modalName == '添加用户') {
            const response = await addUser(values)
            if (response.status === undefined) {
                message.success('添加成功')
                //刷新表格数据
                actionRef.current?.reload();
                isShowModal(false)
            }
        } else {
            const response = await updateUser(editId, values)
            if (response.status === undefined) {
                message.success('修改成功')
                //刷新表格数据
                actionRef.current?.reload();

                formRef.current?.resetFields();
                isShowModal(false)
            }
        }

    }

    return (
        <Modal
            title={modalName}
            visible={isModalVisible}
            footer={null}
            onCancel={() => isShowModal(false)}
            destroyOnClose={true}
        >
            {/* {initialValues == undefined ?
                <Skeleton avatar paragraph={{ rows: 4 }} /> : */}
            <ProForm
                formRef={formRef}
                // initialValues={initialValues}
                onFinish={(values) => createUser(values)

                }
            >
                <ProFormText
                    name="name"
                    label="昵称"
                    placeholder="请输入昵称"
                    rules={[
                        {
                            max: 20,
                            required: true,
                            message: '请输入昵称',
                        },
                    ]}
                />
                <ProFormText
                    name="email"
                    label="邮箱"
                    placeholder="请输入邮箱"
                    rules={[
                        {
                            required: true,
                            message: '请输入邮箱',
                        },
                        {
                            type: 'email',
                            message: '邮箱格式不正确',
                        },
                    ]}
                />
                {modalName == '添加用户'?
                <ProFormText.Password
                name="password"
                label="密码"
                placeholder="请输入密码"
                rules={[
                    {
                        min: 6,
                        required: true,
                        message: '密码最少6位数',
                    },
                ]}
            />:''
        }
                
            </ProForm>
            {/* } */}

        </Modal>
    )
}

export default Create
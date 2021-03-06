/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-15 13:37:27
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-19 16:33:39
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/User/components/CreateOrEdit.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef, useState, useEffect } from 'react'
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Button,Image,Form, Modal, message, Skeleton } from 'antd';
import { addUser, updateUser, showUser,updateAvatar } from '@/services/user'
import { FormInstance } from 'antd/es/form'
import { UploadOutlined } from '@ant-design/icons';
import AliyunOSSUpload from '@/components/AliyunOSSUpload'
const CreateOrEdit = (props: any) => {
    const [initialValues, setInitialValues] = useState({})
    const { isModalVisible } = props
    const { isShowModal } = props
    const { actionRef } = props
    const { editId } = props
    const title = editId === undefined ? '添加用户' : '编辑用户'
    //定义form实例用来操作表单
    const [formObj] = ProForm.useForm()

    console.log("editId:", editId);
    useEffect(() => {
        if (editId !== undefined) {
            getshowUser()
        }
    }, [editId])
    //发送请求，获取数据详情
    const getshowUser = (async () => {
        console.log("执行次数:");
        const res = await showUser(editId)
        console.log("res:", res);
        console.log('formObj:::', formObj);
        // setInitialValues({
        //     name: res.name,
        //     email: res.email,
        // })
        formObj.setFieldsValue({
            name: res.name,
            email: res.email,
            avatar:res.avatar
        })
        setInitialValues(res)
    })
    const createUser = async (values: any) => {
        console.log(values);
        // message.success('提交成功');
        if (title == '添加用户') {
            const response = await addUser(values)
            if (response.status === undefined) {
                message.success('添加成功')
                //刷新表格数据
                actionRef.current?.reload();
                isShowModal(false)
            }
            // const responses = await updateAvatar({avatar:values.avatar})
            // console.log('头像responses:',responses);
            
        } else {
            const response = await updateUser(editId, values)
            if (response.status === undefined) {
                message.success('修改成功')
                //刷新表格数据
                actionRef.current?.reload();
                formObj.resetFields();
                isShowModal(false)
            }
        }
    }
    //文件上传成功后设置cover字段的value
    const setCoverKey = (fileKey: any) => {
        formObj.setFieldsValue({ 'avatar': fileKey })
    }
    return (
        <Modal
            title={title}
            visible={isModalVisible}
            footer={null}
            onCancel={() => isShowModal(false)}
            destroyOnClose={true}
        >
            {initialValues == undefined && editId !== undefined ?
                <Skeleton avatar paragraph={{ rows: 4 }} /> :
                <ProForm
                    form={formObj}
                    initialValues={initialValues}
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
                    {title == '添加用户' ?
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
                        /> : ''
                    }
                     {/* <ProForm.Item
                        label="头像"
                        name="avatar"
                        rules={[
                            { required: true, message: '请上传头像', },
                        ]}
                    >
                        <div>
                            <AliyunOSSUpload
                                accept="image/*"
                                setCoverKey={setCoverKey}
                                showUploadList={true}
                            >
                                <Button icon={<UploadOutlined />}>点击上传头像</Button>
                            </AliyunOSSUpload>
                            {
                                initialValues === undefined || !initialValues?.avatar_url ? '' :
                                    <Image
                                        width={200}
                                        src={initialValues.avatar_url}
                                    />
                            }
                        </div>
                    </ProForm.Item> */}
                </ProForm>
            }
        </Modal>
    )
}

export default CreateOrEdit

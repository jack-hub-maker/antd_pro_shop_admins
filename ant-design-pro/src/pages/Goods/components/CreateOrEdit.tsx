/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-15 13:37:27
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-15 16:10:46
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\pages\User\components\CreateOrEdit.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef, useState, useEffect } from 'react'
import ProForm, { ProFormText, ProFormTextArea, ProFormDigit, ProFormUploadButton } from '@ant-design/pro-form';
import { Form, Modal, message, Skeleton } from 'antd';
import { addUser, updateUser, showUser } from '@/services/user'
import { FormInstance } from 'antd/es/form'

const CreateOrEdit = (props: any) => {
    const [initialValues, setInitialValues] = useState({})
    const { isModalVisible } = props
    const { isShowModal } = props
    const { actionRef } = props
    const { editId } = props
    const title = editId === undefined ? '添加商品' : '编辑商品'
    const formRef = React.createRef<FormInstance>();

    console.log("editId:", editId);
    useEffect(() => {
        if (editId !== undefined) {
            getshowUser()
        }
    }, [editId])
    const getshowUser = (async () => {
        console.log("执行次数:");
        const res = await showUser(editId)
        console.log("res:", res);
        // setInitialValues({
        //     name: res.name,
        //     email: res.email,
        // })
        formRef.current?.setFieldsValue({
            name: res.name,
            email: res.email
        })
        setInitialValues(res)
    })
    const createUser = async (values: any) => {
        console.log(values);
        // message.success('提交成功');
        if (title == '添加商品') {
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
            title={title}
            visible={isModalVisible}
            footer={null}
            onCancel={() => isShowModal(false)}
            destroyOnClose={true}
        >
            {initialValues == undefined && editId !== undefined ?
                <Skeleton avatar paragraph={{ rows: 4 }} /> :
                <ProForm
                    formRef={formRef}
                    // initialValues={initialValues}
                    onFinish={(values) => createUser(values)
                    }
                >
                    <ProFormText
                        name="category_id"
                        label="分类"
                        placeholder="请输入分类"
                        rules={[
                            {
                                max: 20,
                                required: true,
                                message: '请输入分类',
                            },
                        ]}
                    />
                    <ProFormText
                        name="title"
                        label="标题"
                        placeholder="请输入标题"
                        rules={[
                            {
                                required: true, message: '请输入标题',
                            },
                        ]}
                    />
                    <ProFormText
                        name="title"
                        label="商品名"
                        placeholder="请输入商品名"
                        rules={[
                            {
                                required: true, message: '请输入商品名',
                            },
                        ]}
                    />
                    <ProFormTextArea
                        name="description"
                        label="描述"
                        placeholder="请输入描述"
                        rules={[
                            {
                                required: true, message: '请输入描述',
                            },
                        ]}
                    />
                    <ProFormDigit
                        name="price"
                        label="价格"
                        placeholder="请输入价格"
                        min={0}
                        max={9999999}
                        rules={[
                            {
                                required: true, message: '请输入价格',
                            },
                        ]}
                    />
                    <ProFormDigit
                        name="stock"
                        label="库存"
                        placeholder="请输入库存"
                        min={0}
                        max={9999999}
                        rules={[
                            {
                                required: true, message: '请输入库存',
                            },
                        ]}
                    />
                    <ProFormUploadButton
                        label="上传"
                        name="cover"
                        action="upload.do"
                        rules={[
                            {
                                required: true, message: '请选择商品主图',
                            },
                        ]}
                    />
                    <ProFormTextArea
                        name="details"
                        label="详情"
                        placeholder="请输入详情"
                        rules={[
                            {
                                required: true, message: '请输入详情',
                            },
                        ]}
                    />
                </ProForm>
            }
        </Modal>
    )
}

export default CreateOrEdit

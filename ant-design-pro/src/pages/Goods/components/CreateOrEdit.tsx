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
import { Form, Modal, Upload, message, Skeleton, Cascader, Button } from 'antd';
import { addUser, updateUser, showUser } from '@/services/user'
import { getCategory } from '@/services/category'
import { FormInstance } from 'antd/es/form'
import { UploadOutlined } from '@ant-design/icons';
import { labeledStatement } from '@babel/types';
import AliyunOSSUpload from '@/components/AliyunOSSUpload'
const CreateOrEdit = (props: any) => {
    const [initialValues, setInitialValues] = useState({})
    const [options, setOptions] = useState([])

    //定义form实例用来操作表单
    const [formObj] = ProForm.useForm()
    //设置表单的值
    // formObj.setFieldsValue({ fieldName: 'value' })

    const { isModalVisible } = props
    const { isShowModal } = props
    const { actionRef } = props
    const { editId } = props

    const title = editId === undefined ? '添加商品' : '编辑商品'
    const formRef = React.createRef<FormInstance>();
    // console.log("editId:", editId);
    useEffect(() => {
        getCategorys()
        if (editId !== undefined) {
            getshowUser()
        }
    }, [editId])

    //请求分类数据
    const getCategorys = (async () => {
        const res = await getCategory()
        if (res.status === undefined) setOptions(res)

    })
    const getshowUser = (async () => {
        console.log("执行次数:");
        const res = await showUser(editId)
        console.log("res:", res);
        formRef.current?.setFieldsValue({
            name: res.name,
            email: res.email
        })
        setInitialValues(res)
    })
    //文件上传成功后设置cover字段的value
    const setCoverKey = (fileKey: any) => {
        formObj.setFieldsValue({ 'cover': fileKey })
    }
    //表单提交
    const handleSubmit = async (values: any) => {
        console.log(values);
        // message.success('提交成功');
        // if (title == '添加商品') {
        //     const response = await addUser(values)
        //     if (response.status === undefined) {
        //         message.success('添加成功')
        //         //刷新表格数据
        //         actionRef.current?.reload();
        //         isShowModal(false)
        //     }
        // } else {
        //     const response = await updateUser(editId, values)
        //     if (response.status === undefined) {
        //         message.success('修改成功')
        //         //刷新表格数据
        //         actionRef.current?.reload();
        //         formRef.current?.resetFields();
        //         isShowModal(false)
        //     }
        // }
    }
    const onChange = (value: any) => {
        console.log(value);
    }
    return (
        <Modal
            title={title}
            visible={isModalVisible}
            footer={null}
            onCancel={() => isShowModal(false)}
            destroyOnClose={true}
            maskClosable={false}
        >
            {initialValues == undefined && editId !== undefined ?
                <Skeleton avatar paragraph={{ rows: 4 }} /> :
                <ProForm
                    form={formObj}
                    // initialValues={initialValues}
                    onFinish={(values) => handleSubmit(values)
                    }
                >
                    <ProForm.Item
                        name="category_id"
                        label="分类"
                        rules={[
                            {
                                required: true, message: '请选择分类',
                            },
                        ]}
                    >
                        <Cascader fieldNames={{ label: 'name', value: 'id' }} options={options} onChange={onChange} placeholder="请选择分类" />
                    </ProForm.Item>

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

                    <ProForm.Item
                        label="商品主图"
                        name="cover"
                        rules={[
                            { required: true, message: '请上传商品主图', },
                        ]}
                    >
                        <div>
                            <AliyunOSSUpload
                                accept="image/*"
                                setCoverKey={setCoverKey}
                            >
                                <Button icon={<UploadOutlined />}>点击上传商品主图</Button>
                            </AliyunOSSUpload>
                        </div>
                    </ProForm.Item>

                    <ProFormTextArea
                        name="details"
                        label="详情"
                        placeholder="请输入详情"
                        rules={[
                            { required: true, message: '请输入详情', },
                        ]}
                    />
                </ProForm>
            }
        </Modal>
    )
}

export default CreateOrEdit

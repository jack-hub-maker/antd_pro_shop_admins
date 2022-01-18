/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-15 13:37:27
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-18 14:44:45
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Goods/components/CreateOrEdit.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef, useState, useEffect } from 'react'
import ProForm, { ProFormText, ProFormTextArea, ProFormDigit, ProFormUploadButton } from '@ant-design/pro-form';
import { Form, Image, Modal, Upload, message, Skeleton, Cascader, Button } from 'antd';
import { getCategory } from '@/services/category'
import { addGoods, showGoods, updateGoods } from '@/services/goods'
import { FormInstance } from 'antd/es/form'
import { UploadOutlined } from '@ant-design/icons';
import AliyunOSSUpload from '@/components/AliyunOSSUpload'
import Editor from '@/components/Editor'
import { parseTwoDigitYear } from 'moment';
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

    useEffect(() => {
        getCategorys()
        if (editId !== undefined) {
            getshowUser()
        }
    }, [editId])
    //发送请求，获取数据详情
    const getshowUser = (async () => {
        const res = await showGoods(editId)
        console.log("res:", res);
        console.log('formObj:::', formObj);
        //更改表单数据的值
        const { pid, id } = res.category
        const defaultCategory = pid === 0 ? [id] : [pid, id]
        formObj.setFieldsValue({ ...res, category_id: defaultCategory })
        // formObj.setFieldsValue(res)
        setInitialValues(res)
    })

    //请求分类数据
    const getCategorys = (async () => {
        const res = await getCategory()
        if (res.status === undefined) setOptions(res)

    })

    //文件上传成功后设置cover字段的value
    const setCoverKey = (fileKey: any) => {
        formObj.setFieldsValue({ 'cover': fileKey })
    }
    //编辑输入内容后后设置details字段的value
    const setDetails = (content: any) => {
        formObj.setFieldsValue({ 'details': content })
    }
    //表单提交
    const handleSubmit = async (values: any) => {
        console.log(values);
        // let response = {}
        let response: { status?: string } = {};
        if (title == '添加商品') {
            response = await addGoods({ ...values, category_id: values.category_id[1] })
        } else {
            response = await updateGoods(editId, { ...values, category_id: values.category_id[1] })
        }
        if (response.status === undefined) {
            message.success(`${title}成功`)
            //刷新表格数据
            actionRef.current?.reload();

            isShowModal(false)
        }
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
                style={{textAlign:'center'}}
                    form={formObj}
                    initialValues={initialValues}
                    onFinish={(values) => handleSubmit(values)
                    }
                >
                    <ProForm.Item
                        name="category_id"
                        label="分类"
                        rules={[
                            { required: true, message: '请选择分类', },
                        ]}
                    >
                        <Cascader fieldNames={{ label: 'name', value: 'id' }} 
                        options={options} onChange={onChange} placeholder="请选择分类" />
                    </ProForm.Item>

                    <ProFormText
                        name="title"
                        label="商品名"
                        placeholder="请输入商品名"
                        rules={[
                            { required: true, message: '请输入商品名', },
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

                    <ProFormText
                        name='cover'
                        hidden={true}
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
                                showUploadList={true}
                            >
                                <Button style={{textAlign:"justify"}} icon={<UploadOutlined />}>点击上传商品主图</Button>
                            </AliyunOSSUpload>
                            {
                                initialValues === undefined || !initialValues?.cover_url ? '' :
                                    <Image
                                        width={200}
                                        src={initialValues.cover_url}
                                    />
                            }
                        </div>
                    </ProForm.Item>

                    <ProForm.Item
                        name="details"
                        label="商品详情"
                        rules={[
                            { required: true, message: '请输入商品详情', },
                        ]}
                    >
                        {initialValues === undefined || !initialValues?.details ? '' :
                            <Editor
                                setDetails={setDetails}
                                content={initialValues === undefined ? '' : initialValues.details}
                            />
                        }

                    </ProForm.Item>
                </ProForm>
            }
        </Modal>
    )
}

export default CreateOrEdit

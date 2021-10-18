/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-15 13:37:27
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-18 14:36:51
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\pages\Category\components\CreateOrEdit.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef, useState, useEffect } from 'react'
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Form, Image, Modal, Upload, message, Skeleton, Cascader, Button } from 'antd';
import { addUser, updateUser, showUser } from '@/services/user'
import { FormInstance } from 'antd/es/form'

const CreateOrEdit = (props: any) => {
    const [initialValues, setInitialValues] = useState({})
    const { isModalVisible } = props
    const { isShowModal } = props
    const { actionRef } = props
    const { editId } = props
    const title = editId === undefined ? '添加分类' : '编辑分类'
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
            email: res.email
        })
        setInitialValues(res)
    })
    //请求分类数据
    const getCategorys = (async () => {
        const res = await getCategory()
        if (res.status === undefined) setOptions(res)

    })
    //表单提交
    const handleSubmit = async (values: any) => {
        console.log(values);
        // let response = {}
        let response: { status?: string } = {};
        if (title == '添加分类') {
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
                    // initialValues={initialValues}
                    onFinish={(values) => handleSubmit(values)
                    }
                >
                    <ProFormText
                        name="name"
                        label="父级分类"
                        placeholder="请输入父级分类"
                        rules={[
                            {
                                max: 20,
                                required: true,
                                message: '请输入父级分类',
                            },
                        ]}
                    />
                    <ProForm.Item
                        name="category_id"
                        label="父级分类"
                        rules={[
                            { required: true, message: '请输入父级分类', },
                        ]}
                    >
                        <Cascader
                            fieldNames={{ label: 'name', value: 'id' }}
                            options={options} onChange={onChange}
                            placeholder="请选择分类" />
                    </ProForm.Item>
                    <ProFormText
                        name="email"
                        label="分类名称"
                        placeholder="请输入分类名称"
                        rules={[
                            {
                                required: true,
                                message: '请输入分类名称',
                            },

                        ]}
                    />
                </ProForm>
            }
        </Modal>
    )
}

export default CreateOrEdit

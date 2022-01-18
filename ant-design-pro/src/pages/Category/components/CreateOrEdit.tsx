/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-15 13:37:27
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-18 16:32:14
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Category/components/CreateOrEdit.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef, useState, useEffect } from 'react'
import ProForm, { ProFormText, ProFormSelect } from '@ant-design/pro-form';
import { Form, Image, Modal, Upload, message, Skeleton, Cascader, Button } from 'antd';
import { addUser, updateUser, showUser } from '@/services/user'
import { FormInstance } from 'antd/es/form'
import { getCategory, addCategory, updateCategory, detailCategory } from '@/services/category'
const CreateOrEdit = (props: any) => {
    const [initialValues, setInitialValues] = useState({})
    const { isModalVisible } = props
    const { isShowModal } = props
    const { actionRef } = props
    const { editId } = props
    const title = editId === null ? '添加分类' : '编辑分类'
    //定义form实例用来操作表单
    const [formObj] = ProForm.useForm()
    const [options, setOptions] = useState([])
    const optionsRef = useRef(options)
    console.log("editId:", editId);
    // useEffect(() => {
    //     getCategorys()
    //     if (editId !== null) {
    //         getMyCategory()
    //     }
    // }, [editId])
    //请求分类数据
    const getCategorys = (async () => {
        const res = await getCategory()
        if (res.status === undefined)
            console.log('分类数据res:', res);
        setOptions(res)
        optionsRef.current = res
    })
    useEffect(() => {
        const effectWays = async () => {
            await getCategorys()
            await getMyCategory()
        }
        effectWays()
    }, [])
    //发送请求，获取数据详情
    const getMyCategory = (async () => {
        if (editId === null) return
        console.log("编辑获取数据");
        const res = await detailCategory(editId)
        console.log("res:", res);
        console.log('options:::', optionsRef);
        formObj.setFieldsValue({
            ...res,
            pid: res.pid
            // pid: optionsRef.current?.map((item: any) => {
            //     return { label: item.name, value: item.pid };
            // })
        })
        setInitialValues(res)
    })

    //表单提交
    const handleSubmit = async (values: any) => {
        console.log(values);
        // let response = {}
        let response: { status?: string } = {};
        if (title == '添加分类') {
            response = await addCategory({ ...values })
        } else {
            response = await updateCategory(editId, { ...values })
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
            <ProForm
                form={formObj}
                // initialValues={initialValues}
                onFinish={(values) => handleSubmit(values)
                }
            >
                <ProForm.Item
                    name="pid"
                    label="父级分类"
                    rules={[
                        { required: true, message: '请输入父级分类', },
                    ]}
                >
                    <ProFormSelect
                        options={
                            options?.map((item: any) => {
                                return { label: item.name, value: item.id };
                            })
                        }
                        // request={async () => {
                        //     const response = await getCategory();
                        //     return response?.map((item: any) => {
                        //         return { label: item.name, value: item.id };
                        //     });
                        // }}
                        placeholder="请选择分类" />
                </ProForm.Item>
                <ProFormText
                    name="name"
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

        </Modal>
    )
}

export default CreateOrEdit

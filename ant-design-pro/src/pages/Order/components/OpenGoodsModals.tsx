/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-01-19 10:56:41
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-19 13:33:31
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/Order/components/OpenGoodsModals.tsx
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import React, { useRef, useState, useEffect } from 'react'
import ProForm, { ProFormText, ProFormSelect } from '@ant-design/pro-form';
import { Form, Image, Modal, Upload, message, Skeleton, Cascader, Button } from 'antd';
import { addUser, updateUser, showUser } from '@/services/user'
import { FormInstance } from 'antd/es/form'
import { openOrders } from '@/services/order'
const OpenGoodsModals = (props: any) => {
    const [initialValues, setInitialValues] = useState({})
    const { isOpenVisible } = props
    const { isShowModal } = props
    const { actionRef } = props
    const title = '发货'
    //定义form实例用来操作表单
    const [formObj] = ProForm.useForm()
    const [options, setOptions] = useState<any>([])

    useEffect(() => {
        console.log('props:', props);
        // setOptions([{name:'顺丰',id:'SF'}]),YTO,YD
        setOptions([
            { name: '顺丰', id: 'SF' },
            { name: '韵达', id: 'YTO' },
            { name: '圆通', id: 'YD' },
        ])
        const effectWays = async () => {

        }
        effectWays()
    }, [])

    //表单提交
    const handleSubmit = async (values: any) => {
        console.log(values);
        let response: { status?: string } = {};
        response = await openOrders(props?.chooseRecord.id, { ...values })
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
            visible={isOpenVisible}
            footer={null}
            onCancel={() => isShowModal(false)}
            destroyOnClose={true}
        >
            <ProForm
                form={formObj}
                onFinish={(values) => handleSubmit(values)
                }
            >
                <ProForm.Item
                    name="express_type"
                    label="快递类型"//SF,YTO,YD
                    rules={[
                        { required: true, message: '请选择快递类型', },
                    ]}
                >
                    <ProFormSelect
                        options={
                            options?.map((item: any) => {
                                return { label: item.name, value: item.id };
                            })
                        }
                        placeholder="请选择快递类型" />
                </ProForm.Item>
                <ProFormText
                    name="express_no"
                    label="快递单号"
                    placeholder="请输入快递单号"
                    rules={[
                        {
                            required: true,
                            message: '请输入快递单号',
                        },
                    ]}
                />
            </ProForm>
        </Modal>
    )
}

export default OpenGoodsModals

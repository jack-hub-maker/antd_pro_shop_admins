import React from 'react'
import { Form, Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ossConfig } from '@/services/common'
export default class AliyunOSSUpload extends React.Component {
    state = {
        OSSData: {},
    };

    async componentDidMount() {
        await this.init();
    }
    //初始化获取oss上传签名 域名：https://laravel-book-shop.oss-cn-beijing.aliyuncs.com/  1634445792573.jpg
    init = async () => {
        try {
            const OSSData = await ossConfig();
            console.log('OSSData:', OSSData);
            this.setState({
                OSSData,
            });
        } catch (error) {
            message.error(error);
        }
    };

    //文件上传过程中触发的回调函数，直到上传完成
    onChange = ({ file }) => {
        console.log('Aliyun OSS:', file);
        if (file.status === 'done') {
            //上传成功后把文件的key设置为表单某个字段的值
            this.props.setCoverKey(file.key)
            message.success('上传成功')
        }
    };


    //额外的上传参数
    getExtraData = file => {
        const { OSSData } = this.state;

        return {
            key: file.key,
            OSSAccessKeyId: OSSData.accessid,
            policy: OSSData.policy,
            Signature: OSSData.signature,
        };
    };
    //选择文件后上传前的钩子
    beforeUpload = async file => {
        const { OSSData } = this.state;
        const expire = OSSData.expire * 1000;
        //如果签名过期则重新获取
        if (expire < Date.now()) {
            await this.init();
        }

        const dir = 'react/' //定义上传的目录

        const suffix = file.name.slice(file.name.lastIndexOf('.'));
        const filename = OSSData.dir + Date.now() + suffix;
        file.key = OSSData.dir + dir + filename; //在getExtraData中遇到的云存储的文件的key
        file.url = OSSData.host + OSSData.dir + dir + filename;//上传完成后，用于显示内容

        return file;
    };

    render() {
        const { value, accept } = this.props;
        const props = {
            accept: accept || '',
            name: 'file',
            fileList: value,
            action: this.state.OSSData.host,
            onChange: this.onChange,
            data: this.getExtraData,
            beforeUpload: this.beforeUpload,
            listType: 'picture',
            maxCount: 1
        };
        return (
            <Upload {...props}>
                {/* <Button icon={<UploadOutlined />}>点击上传</Button> */}
                {this.props.children}
            </Upload>
        );
    }
}


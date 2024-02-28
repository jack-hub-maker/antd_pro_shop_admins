import request from '@/utils/request';
const mock = false;
// const mock= { delay: 800 }
export default {
    // 上传报告（审批时）
    postPaymentUploadApproval(data, mock) {
        return request.post('/materials/payment/uploadApproval', { data, mock });
    },
    // 材料上传
    postPaymentUpload(data, mock) {
        return request.post('/materials/payment/upload', { data, mock });
    },
    // 材料删除
    postPaymentRemove(data, mock) {
        return request.post('/materials/payment/remove', { data, mock });
    },
    // 获取报告清单列表（审批时）
    postPaymentListApproval(data, mock) {
        return request.post('/materials/payment/listApproval', { data, mock });
    },
    // 资料清单
    postPaymentList(data, mock) {
        return request.post('/materials/payment/list', { data, mock });
    },
};
/* prettier-ignore-end */

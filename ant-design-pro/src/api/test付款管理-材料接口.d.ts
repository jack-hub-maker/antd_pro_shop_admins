import * as Types from './interface/付款管理-材料接口';
declare const _default: {
    postPaymentUploadApproval(data: Types.PaymentUploadApprovalRequest, mock: Boolean): Promise<Types.PaymentUploadApprovalResponse>;
    postPaymentUpload(data: Types.PaymentUploadRequest, mock: Boolean): Promise<Types.PaymentUploadResponse>;
    postPaymentRemove(data: Types.PaymentRemoveRequest, mock: Boolean): Promise<Types.PaymentRemoveResponse>;
    postPaymentListApproval(data: Types.PaymentListApprovalRequest, mock: Boolean): Promise<Types.PaymentListApprovalResponse>;
    postPaymentList(data: Types.PaymentListRequest, mock: Boolean): Promise<Types.PaymentListResponse>;
};
export default _default;

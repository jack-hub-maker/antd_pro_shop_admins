import * as Types from './interface/监督档案信息管理';
declare const _default: {
    getManageExport(params: Types.ManageExportRequest, mock: Boolean): Promise<Types.ManageExportResponse>;
    getManageList(params: Types.ManageListRequest, mock: Boolean): Promise<Types.ManageListResponse>;
    postManageChangeStatus(data: Types.ManageChangeStatusRequest, mock: Boolean): Promise<Types.ManageChangeStatusResponse>;
    getManageDetail(params: Types.ManageDetailRequest, mock: Boolean): Promise<Types.ManageDetailResponse>;
};
export default _default;

import * as Types from './interface/基层动态相关接口';
declare const _default: {
    postSubstratumAdd(data: Types.SubstratumAddRequest, mock: Boolean): Promise<Types.SubstratumAddResponse>;
    getSubstratumUpdateStatus(params: Types.SubstratumUpdateStatusRequest, mock: Boolean): Promise<Types.SubstratumUpdateStatusResponse>;
    putSubstratumUpdate(data: Types.SubstratumUpdateRequest, mock: Boolean): Promise<Types.SubstratumUpdateResponse>;
    deleteSubstratumDelete(params: Types.SubstratumDeleteRequest, mock: Boolean): Promise<Types.SubstratumDeleteResponse>;
    getSubstratumFindByUuid(params: Types.SubstratumFindByUuidRequest, mock: Boolean): Promise<Types.SubstratumFindByUuidResponse>;
    getSubstratumList(params: Types.SubstratumListRequest, mock: Boolean): Promise<Types.SubstratumListResponse>;
    getSubstratumShow(params: Types.SubstratumShowRequest, mock: Boolean): Promise<Types.SubstratumShowResponse>;
};
export default _default;

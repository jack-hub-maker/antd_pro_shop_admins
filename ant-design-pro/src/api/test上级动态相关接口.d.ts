import * as Types from './interface/上级动态相关接口';
declare const _default: {
    postSuperiorsAdd(data: Types.SuperiorsAddRequest, mock: Boolean): Promise<Types.SuperiorsAddResponse>;
    getSuperiorsUpdateStatus(params: Types.SuperiorsUpdateStatusRequest, mock: Boolean): Promise<Types.SuperiorsUpdateStatusResponse>;
    putSuperiorsUpdate(data: Types.SuperiorsUpdateRequest, mock: Boolean): Promise<Types.SuperiorsUpdateResponse>;
    deleteSuperiorsDelete(params: Types.SuperiorsDeleteRequest, mock: Boolean): Promise<Types.SuperiorsDeleteResponse>;
    getSuperiorsFindByUuid(params: Types.SuperiorsFindByUuidRequest, mock: Boolean): Promise<Types.SuperiorsFindByUuidResponse>;
    getSuperiorsList(params: Types.SuperiorsListRequest, mock: Boolean): Promise<Types.SuperiorsListResponse>;
    getSuperiorsShow(params: Types.SuperiorsShowRequest, mock: Boolean): Promise<Types.SuperiorsShowResponse>;
};
export default _default;

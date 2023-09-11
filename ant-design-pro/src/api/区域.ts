/* prettier-ignore-start */
import * as Types from './interface/区域'
import request from '@/utils/request'

const mock = false
// const mock= { delay: 800 }
export default {
  // 行政区划
  getSysAreaLinkage(
    params: Types.SysAreaLinkageRequest,
    mock: Boolean,
  ): Promise<Types.SysAreaLinkageResponse> {
    return request.get('/sysArea/linkage', { params, mock })
  },

  // 区域详情
  getSysAreaId(params: Types.SysAreaIdRequest, mock: Boolean): Promise<Types.SysAreaIdResponse> {
    return request.get('/sysArea/{id}', { params, mock })
  },

  // 区域列表
  getSysAreaPage(
    params: Types.SysAreaPageRequest,
    mock: Boolean,
  ): Promise<Types.SysAreaPageResponse> {
    return request.get('/sysArea/page', { params, mock })
  },
}

/* prettier-ignore-end */

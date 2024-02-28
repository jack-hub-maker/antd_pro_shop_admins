/* prettier-ignore-start */
import * as Types from './interface/监督档案用户人员填报'
import request from '@/utils/request'

const mock = false
// const mock= { delay: 800 }
export default {
  // 导出
  postPersonalExport(
    data: Types.PersonalExportRequest,
    mock: Boolean,
  ): Promise<Types.PersonalExportResponse> {
    return request.post('/fileReport/personal/export', { data, mock, type: 'download' })
  },

  // 人员档案填报去完成
  getPersonalDetail(
    params: Types.PersonalDetailRequest,
    mock: Boolean,
  ): Promise<Types.PersonalDetailResponse> {
    return request.get('/fileReport/personal/detail', { params, mock })
  },

  // 保存
  postPersonalSave(
    data: Types.PersonalSaveRequest,
    mock: Boolean,
  ): Promise<Types.PersonalSaveResponse> {
    return request.post('/fileReport/personal/save', { data, mock })
  },

  // 报送列表
  getPersonalList(
    params: Types.PersonalListRequest,
    mock: Boolean,
  ): Promise<Types.PersonalListResponse> {
    return request.get('/fileReport/personal/list', { params, mock })
  },

  // 预览
  getPersonalPreview(
    params: Types.PersonalPreviewRequest,
    mock: Boolean,
  ): Promise<Types.PersonalPreviewResponse> {
    return request.get('/fileReport/personal/preview', { params, mock })
  },
}

/* prettier-ignore-end */

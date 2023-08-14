/* prettier-ignore-start */
import * as Types from './interface/品种'
import request from '@/utils/request'

const mock = false
// const mock= { delay: 800 }
export default {
  // 品种列表
  getSkuPage(params: Types.SkuPageRequest, mock: Boolean): Promise<Types.SkuPageResponse> {
    return request.get('/sku/page', { params, mock })
  },

  // 品种删除
  deleteSkuId(params: Types.SkuIdRequest, mock: Boolean): Promise<Types.SkuIdResponse> {
    return request.delete('/sku/{id}', { params, mock })
  },

  // 品种详情
  getSkuId(params: Types.SkuIdRequest, mock: Boolean): Promise<Types.SkuIdResponse> {
    return request.get('/sku/{id}', { params, mock })
  },

  // 添加品种
  postSku(data: Types.SkuRequest, mock: Boolean): Promise<Types.SkuResponse> {
    return request.post('/sku', { data, mock })
  },
}

/* prettier-ignore-end */

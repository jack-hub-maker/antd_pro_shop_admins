/* prettier-ignore-start */
import * as Types from './interface/门店'
import request from '@/utils/request'

const mock = false
// const mock= { delay: 800 }
export default {
  // 门店列表
  getStorePage(params: Types.StorePageRequest, mock: Boolean): Promise<Types.StorePageResponse> {
    return request.get('/store/page', { params, mock })
  },

  // 门店删除
  deleteStoreId(params: Types.StoreIdRequest, mock: Boolean): Promise<Types.StoreIdResponse> {
    return request.delete('/store/{id}', { params, mock })
  },

  // 门店详情
  getStoreId(params: Types.StoreIdRequest, mock: Boolean): Promise<Types.StoreIdResponse> {
    return request.get('/store/{id}', { params, mock })
  },
}

/* prettier-ignore-end */

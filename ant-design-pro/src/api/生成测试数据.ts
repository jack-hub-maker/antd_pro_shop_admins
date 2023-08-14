/* prettier-ignore-start */
import * as Types from './interface/生成测试数据'
import request from '@/utils/request'

const mock = false
// const mock= { delay: 800 }
export default {
  // 生成随机业务员
  getInitUser(params: Types.InitUserRequest, mock: Boolean): Promise<Types.InitUserResponse> {
    return request.get('/test/init/user', { params, mock })
  },

  // 生成随机店铺
  getInitStore(params: Types.InitStoreRequest, mock: Boolean): Promise<Types.InitStoreResponse> {
    return request.get('/test/init/store', { params, mock })
  },

  // 生成随机打卡
  getInitClock(params: Types.InitClockRequest, mock: Boolean): Promise<Types.InitClockResponse> {
    return request.get('/test/init/clock', { params, mock })
  },

  // 生成随机订货
  getInitOrder(params: Types.InitOrderRequest, mock: Boolean): Promise<Types.InitOrderResponse> {
    return request.get('/test/init/order', { params, mock })
  },
}

/* prettier-ignore-end */

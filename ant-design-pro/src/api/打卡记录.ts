/* prettier-ignore-start */
import * as Types from './interface/打卡记录'
import request from '@/utils/request'

const mock = false
// const mock= { delay: 800 }
export default {
  // 打卡记录列表
  getClockInPage(
    params: Types.ClockInPageRequest,
    mock: Boolean,
  ): Promise<Types.ClockInPageResponse> {
    return request.get('/clockIn/page', { params, mock })
  },

  // 销售分析
  getClockinDetailStatistics(
    params: Types.ClockinDetailStatisticsRequest,
    mock: Boolean,
  ): Promise<Types.ClockinDetailStatisticsResponse> {
    return request.get('/clockinDetail/statistics', { params, mock })
  },
}

/* prettier-ignore-end */

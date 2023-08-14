/* prettier-ignore-start */
import * as Types from './interface/数据统计'
import request from '@/utils/request'


export default {
  // 大屏接口
  getStatistic(params: Types.StatisticRequest): Promise<Types.StatisticResponse> {
    return request.get('/statistic', { params })
  },
}

/* prettier-ignore-end */

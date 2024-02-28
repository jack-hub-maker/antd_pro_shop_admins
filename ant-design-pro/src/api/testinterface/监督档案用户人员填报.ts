/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore

/**
 * 接口 [导出↗](http://yapi.zswltec.com:3000/project/57/interface/api/17371) 的 **请求类型**
 *
 * @分类 [监督档案用户人员填报↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3804)
 * @请求头 `POST /fileReport/personal/export`
 * @更新时间 `2024-01-04 15:38:29`
 */
export interface PersonalExportRequest {
  /**
   * 关联报送uuid
   */
  submissionUuids?: string[]
  /**
   * 模块类型
   */
  reportType: string
}

/**
 * 接口 [导出↗](http://yapi.zswltec.com:3000/project/57/interface/api/17371) 的 **返回类型**
 *
 * @分类 [监督档案用户人员填报↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3804)
 * @请求头 `POST /fileReport/personal/export`
 * @更新时间 `2024-01-04 15:38:29`
 */
export interface PersonalExportResponse {}

/**
 * 接口 [人员档案填报去完成↗](http://yapi.zswltec.com:3000/project/57/interface/api/16861) 的 **请求类型**
 *
 * @分类 [监督档案用户人员填报↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3804)
 * @请求头 `GET /fileReport/personal/detail`
 * @更新时间 `2024-01-04 14:15:26`
 */
export interface PersonalDetailRequest {
  uuid: string
}

/**
 * 接口 [人员档案填报去完成↗](http://yapi.zswltec.com:3000/project/57/interface/api/16861) 的 **返回类型**
 *
 * @分类 [监督档案用户人员填报↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3804)
 * @请求头 `GET /fileReport/personal/detail`
 * @更新时间 `2024-01-04 14:15:26`
 */
export interface PersonalDetailResponse {
  /**
   * 成功标记
   */
  success?: boolean
  /**
   * 状态码
   */
  code?: number
  /**
   * 状态信息
   */
  message?: string
  /**
   * 结果数据
   */
  data?: {
    id?: number
    /**
     * 唯一标识
     */
    uuid?: string
    /**
     * 关联审核记录id
     */
    auditId?: number
    /**
     * 报送标识
     */
    submissionUuid?: string
    /**
     * 档案名称
     */
    fileName?: string
    /**
     * 单位
     */
    orgName?: string
    /**
     * 部门
     */
    department?: string
    /**
     * 岗位人员
     */
    role?: string
    /**
     * 权利事项清单
     */
    powerList?: string[]
    /**
     * 廉洁风险清单
     */
    incorruptList?: string[]
    /**
     * 防控措施清单
     */
    preventionList?: string[]
    /**
     * 分管领导审查意见
     */
    leaderSuggest?: string
    /**
     * 纪检部门审定意见
     */
    disciplineSuggest?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 附件
     */
    attachment?: string[]
  }
}

/**
 * 接口 [保存↗](http://yapi.zswltec.com:3000/project/57/interface/api/16885) 的 **请求类型**
 *
 * @分类 [监督档案用户人员填报↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3804)
 * @请求头 `POST /fileReport/personal/save`
 * @更新时间 `2024-01-04 14:15:26`
 */
export interface PersonalSaveRequest {
  id?: number
  /**
   * 唯一标识
   */
  uuid?: string
  /**
   * 关联审核记录id
   */
  auditId?: number
  /**
   * 报送标识
   */
  submissionUuid?: string
  /**
   * 档案名称
   */
  fileName?: string
  /**
   * 单位
   */
  orgName?: string
  /**
   * 部门
   */
  department?: string
  /**
   * 岗位人员
   */
  role?: string
  /**
   * 权利事项清单
   */
  powerList?: string[]
  /**
   * 廉洁风险清单
   */
  incorruptList?: string[]
  /**
   * 防控措施清单
   */
  preventionList?: string[]
  /**
   * 分管领导审查意见
   */
  leaderSuggest?: string
  /**
   * 纪检部门审定意见
   */
  disciplineSuggest?: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 附件
   */
  attachment?: string[]
}

/**
 * 接口 [保存↗](http://yapi.zswltec.com:3000/project/57/interface/api/16885) 的 **返回类型**
 *
 * @分类 [监督档案用户人员填报↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3804)
 * @请求头 `POST /fileReport/personal/save`
 * @更新时间 `2024-01-04 14:15:26`
 */
export interface PersonalSaveResponse {
  /**
   * 成功标记
   */
  success?: boolean
  /**
   * 状态码
   */
  code?: number
  /**
   * 状态信息
   */
  message?: string
}

/**
 * 接口 [报送列表↗](http://yapi.zswltec.com:3000/project/57/interface/api/16855) 的 **请求类型**
 *
 * @分类 [监督档案用户人员填报↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3804)
 * @请求头 `GET /fileReport/personal/list`
 * @更新时间 `2024-01-04 12:55:19`
 */
export interface PersonalListRequest {
  /**
   * 档案报告类型：人员档案:PERSONAL_FILE/事项档案:EVENT_FILE
   */
  reportType?: string
  /**
   * 档案名称
   */
  fileName?: string
  /**
   * 审核状态
   */
  auditStatus?: string
  /**
   * 截止时间区间开始
   */
  deadlineFrom?: string
  /**
   * 截止时间区间结束
   */
  deadlineTo?: string
  /**
   * 页码
   */
  page: string
  /**
   * 页面记录条数
   */
  pageSize: string
}

/**
 * 接口 [报送列表↗](http://yapi.zswltec.com:3000/project/57/interface/api/16855) 的 **返回类型**
 *
 * @分类 [监督档案用户人员填报↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3804)
 * @请求头 `GET /fileReport/personal/list`
 * @更新时间 `2024-01-04 12:55:19`
 */
export interface PersonalListResponse {
  /**
   * 成功标记
   */
  success?: boolean
  /**
   * 状态码
   */
  code?: number
  /**
   * 状态信息
   */
  message?: string
  /**
   * 结果数据
   */
  data?: {
    /**
     * 总记录数
     */
    total?: number
    /**
     * 当前页
     */
    page?: number
    /**
     * 每页的数量
     */
    pageSize?: number
    /**
     * 总页数
     */
    pages?: number
    /**
     * 当前页的数量
     */
    size?: number
    /**
     * 内容列表
     */
    list?: {
      id?: number
      /**
       * 报送唯一标识
       */
      uuid?: string
      /**
       * 关联审核记录id
       */
      auditId?: number
      /**
       * 档案名称
       */
      fileName?: string
      /**
       * 关联的报送任务标识
       */
      taskUuid?: string
      /**
       * 档案报告类型：人员档案/事项档案
       */
      reportType?: string
      /**
       * 截止日期
       */
      deadline?: string
      /**
       * 处理状态 (NONE_PROCEED: 事项待办处理状态, AUDIT, REJECT, FINISH, CANCEL)
       */
      handleStatus?: number
      /**
       * 处理状态
       */
      handleStatusString?: string
      /**
       * 是否超时
       */
      timeout?: boolean
      /**
       * 当前处理人
       */
      currentProcessor?: string
      /**
       * 更新时间
       */
      gmtUpdate?: string
      /**
       * 完成时间
       */
      completionTime?: string
      /**
       * 创建人
       */
      createBy?: string
      /**
       * 接收人
       */
      receiveUser?: string
      /**
       * 附件uuid
       */
      attachment?: string
    }[]
    map?: {
      KEY?: {}
    }
  }
}

/**
 * 接口 [预览↗](http://yapi.zswltec.com:3000/project/57/interface/api/17377) 的 **请求类型**
 *
 * @分类 [监督档案用户人员填报↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3804)
 * @请求头 `GET /fileReport/personal/preview`
 * @更新时间 `2024-01-04 12:55:19`
 */
export interface PersonalPreviewRequest {
  id?: string
  /**
   * 唯一标识
   */
  uuid?: string
  /**
   * 报送标识
   */
  submissionUuid?: string
  /**
   * 档案名称
   */
  fileName?: string
  /**
   * 单位
   */
  orgName?: string
  /**
   * 部门
   */
  department?: string
  /**
   * 岗位人员
   */
  role?: string
  /**
   * 权利事项清单
   */
  powerList?: string
  /**
   * 廉洁风险清单
   */
  incorruptList?: string
  /**
   * 防控措施清单
   */
  preventionList?: string
  /**
   * 分管领导审查意见
   */
  leaderSuggest?: string
  /**
   * 纪检部门审定意见
   */
  disciplineSuggest?: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 附件
   */
  attachment?: string
  /**
   * 模块类型
   */
  reportType: string
}

/**
 * 接口 [预览↗](http://yapi.zswltec.com:3000/project/57/interface/api/17377) 的 **返回类型**
 *
 * @分类 [监督档案用户人员填报↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3804)
 * @请求头 `GET /fileReport/personal/preview`
 * @更新时间 `2024-01-04 12:55:19`
 */
export interface PersonalPreviewResponse {
  /**
   * 成功标记
   */
  success?: boolean
  /**
   * 状态码
   */
  code?: number
  /**
   * 状态信息
   */
  message?: string
  /**
   * 结果数据
   */
  data?: {
    /**
     * 唯一key
     */
    key?: string
    /**
     * 文件名称 例如： xx.jpg
     */
    fileName?: string
    /**
     * 文件类型
     */
    fileType?: string
    /**
     * 文件路径 例如：gungnir/2022/6/20
     */
    filePath?: string
    /**
     * 上传时间
     */
    createTime?: string
    /**
     * 上传人
     */
    createBy?: string
  }[]
}

/* prettier-ignore-end */

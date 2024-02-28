import request from '@/utils/request';
const mock = false;
// const mock= { delay: 800 }
export default {
    // 批量导出
    getManageExport(params, mock) {
        return request.get('/fileReport/manage/export', { params, mock, type: 'download' });
    },
    // 报送列表
    getManageList(params, mock) {
        return request.get('/fileReport/manage/list', { params, mock });
    },
    // 更改状态
    postManageChangeStatus(data, mock) {
        return request.post('/fileReport/manage/changeStatus', { data, mock });
    },
    // 模板任务详情
    getManageDetail(params, mock) {
        return request.get('/fileReport/manage/detail', { params, mock });
    },
};
/* prettier-ignore-end */

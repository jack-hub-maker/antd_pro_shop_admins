import request from '@/utils/request';
const mock = false;
// const mock= { delay: 800 }
export default {
    // 上传文章
    postSubstratumAdd(data, mock) {
        return request.post('/incorruptible/substratum/add', { data, mock });
    },
    // 修改展示状态
    getSubstratumUpdateStatus(params, mock) {
        return request.get('/incorruptible/substratum/updateStatus', { params, mock });
    },
    // 修改文章
    putSubstratumUpdate(data, mock) {
        return request.put('/incorruptible/substratum/update', { data, mock });
    },
    // 删除文章
    deleteSubstratumDelete(params, mock) {
        return request.delete('/incorruptible/substratum/delete', { params, mock });
    },
    // 回显数据
    getSubstratumFindByUuid(params, mock) {
        return request.get('/incorruptible/substratum/findByUuid', { params, mock });
    },
    // 文章列表
    getSubstratumList(params, mock) {
        return request.get('/incorruptible/substratum/list', { params, mock });
    },
    // 查看作品
    getSubstratumShow(params, mock) {
        return request.get('/incorruptible/substratum/show', { params, mock });
    },
};
/* prettier-ignore-end */

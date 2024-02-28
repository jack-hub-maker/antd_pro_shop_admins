import request from '@/utils/request';
const mock = false;
// const mock= { delay: 800 }
export default {
    // 上传文章
    postSuperiorsAdd(data, mock) {
        return request.post('/incorruptible/superiors/add', { data, mock });
    },
    // 修改展示状态
    getSuperiorsUpdateStatus(params, mock) {
        return request.get('/incorruptible/superiors/updateStatus', { params, mock });
    },
    // 修改文章
    putSuperiorsUpdate(data, mock) {
        return request.put('/incorruptible/superiors/update', { data, mock });
    },
    // 删除文章
    deleteSuperiorsDelete(params, mock) {
        return request.delete('/incorruptible/superiors/delete', { params, mock });
    },
    // 回显数据
    getSuperiorsFindByUuid(params, mock) {
        return request.get('/incorruptible/superiors/findByUuid', { params, mock });
    },
    // 文章列表
    getSuperiorsList(params, mock) {
        return request.get('/incorruptible/superiors/list', { params, mock });
    },
    // 查看文章
    getSuperiorsShow(params, mock) {
        return request.get('/incorruptible/superiors/show', { params, mock });
    },
};
/* prettier-ignore-end */

import request from '@/utils/request';
const mock = false;
// const mock= { delay: 800 }
export default {
    // 下载文件测试
    getFileDownLoad(params, mock) {
        return request.get('/file/downLoad', { params, mock, type: 'download' });
    },
    // \/file\/query
    postFileQuery(data, mock) {
        return request.post('/file/query', { data, mock });
    },
    // onlyoffice上传文件测试
    postFileUploadFiles(data, mock) {
        return request.post('/file/uploadFiles', { data, mock, type: 'upload' });
    },
    // 上传文件测试
    postFileUpload(data, mock) {
        return request.post('/file/upload', { data, mock, type: 'upload' });
    },
    // 文件下载
    getFileDownload(params, mock) {
        return request.get('/file/file/download', { params, mock, type: 'download' });
    },
    // 文件预览下载
    getFileDownloadFile(params, mock) {
        return request.get('/file/downloadFile', { params, mock, type: 'download' });
    },
};
/* prettier-ignore-end */

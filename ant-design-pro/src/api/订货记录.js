import request from '@/utils/request';
const mock = false;
// const mock= { delay: 800 }
export default {
    // 订货记录
    getOrderPage(params, mock) {
        return request.get('/order/page', { params, mock });
    },
};
/* prettier-ignore-end */

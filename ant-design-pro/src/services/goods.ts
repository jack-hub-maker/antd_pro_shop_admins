import request from '@/utils/request';
//获取商品列表
export async function getGoods(params: any): Promise<any> {
    return request('/admin/goods', { params });
}
//上架和下架商品
export async function isOn(goodsId: any): Promise<any> {
    return request.patch(`/admin/goods/${goodsId}/on`);
}
//推荐不推荐商品
export async function isRecommend(goodsId: any): Promise<any> {
    return request.patch(`/admin/goods/${goodsId}/recommend`);
}
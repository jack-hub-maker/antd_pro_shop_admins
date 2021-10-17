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

//添加商品
export async function addGoods(data: any): Promise<any> {
    return request.post('/admin/goods', { data });
}
//商品详情
export async function showGoods(editId: any): Promise<any> {
    return request.get(`/admin/goods/${editId}?include=category`);
}

//更新商品
export async function updateGoods(editId: any, data: any): Promise<any> {
    return request.put(`/admin/goods/${editId}`, { data });
}

import request from '@/utils/request';
/**
 * 获取oss上传策略和签名
 * @returns 
 */
export async function ossConfig(): Promise<any> {
  return request('/auth/oss/token');
}
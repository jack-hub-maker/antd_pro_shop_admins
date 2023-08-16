export default function request(payload, options = {
    server: 'prod',
}) {
    return new Promise((resolve, reject) => {
        // 基本地址
        const baseUrl = options.server === 'mock'
            ? payload.mockUrl
            : options.server === 'dev'
                ? payload.devUrl
                : payload.prodUrl;
        // 请求地址
        const url = `${baseUrl}${payload.path}`;
        // 具体请求逻辑
    });
}

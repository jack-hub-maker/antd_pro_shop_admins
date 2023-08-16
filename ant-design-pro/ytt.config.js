import { defineConfig } from 'yapi-to-typescript'

export default defineConfig([
  {
    // serverUrl: 'https://doc.jsxygkj.com',
    serverUrl: 'http://api-dev.zswl.cn:3011',
    typesOnly: false,
    target: 'javascript',
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'production',
    outputFilePath: 'src/demoApi/index.js',
    requestFunctionFilePath: 'src/demoApi2/request.js',
    dataKey: 'data',
    projects: [
      {
        // token: '89e8996db5cad9c6f92f435375240add0908f76bf8c99b5e5bfb134a464b0bc7',
        token: '546c509f3709f28da0b864a8fee0c06fd913f2ea1db95b1edf1f6135afbb5530',
        categories: [
          {
            // id: [613, 598],
            id: [1930, 1646],
            getRequestFunctionName(interfaceInfo, changeCase) {
              // 以接口全路径生成请求函数名
              return changeCase.camelCase(interfaceInfo.path)

              // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如:
              // return changeCase.camelCase(`api_${interfaceInfo.path}`)

              // 若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如:
              // return changeCase.camelCase(`${interfaceInfo.method}_${interfaceInfo.path}`)
            },
          },
        ],
      },
    ],
  },
])
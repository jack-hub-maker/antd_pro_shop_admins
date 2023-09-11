// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
// import SentryCliPlugin from '@sentry/webpack-plugin';

const { REACT_APP_ENV } = process.env;
const webpackPlugin = (config: any) => {
  if (process.env.NODE_ENV === 'production') {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          minChunks: 2,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test: /^.*node_modules[\\/](?!ag-grid-|wangeditor|react-virtualized|rc-select|rc-drawer|rc-time-picker|rc-tree|rc-table|rc-calendar).*$/,
              chunks: 'all',
              priority: 10,
            },
            virtualized: {
              name: 'virtualized',
              test: /[\\/]node_modules[\\/]react-virtualized/,
              chunks: 'all',
              priority: 10,
            },
            rcselect: {
              name: 'rc-select',
              test: /[\\/]node_modules[\\/]rc-select/,
              chunks: 'all',
              priority: 10,
            },
            // antd: {
            //     name: 'antd',
            //     test: /[\\/]node_modules[\\/]antd/,
            //     chunks: 'all',
            //     priority: 10,
            // },
            rcdrawer: {
              name: 'rcdrawer',
              test: /[\\/]node_modules[\\/]rc-drawer/,
              chunks: 'all',
              priority: 10,
            },
            rctimepicker: {
              name: 'rctimepicker',
              test: /[\\/]node_modules[\\/]rc-time-picker/,
              chunks: 'all',
              priority: 10,
            },
            ag: {
              name: 'ag',
              test: /[\\/]node_modules[\\/]ag-grid-/,
              chunks: 'all',
              priority: 10,
            },
            // antd: {
            //     name: "antd",
            //     test: /[\\/]node_modules[\\/]antd[\\/]/,
            //     chunks: "all",
            //     priority: 9
            // },
            rctree: {
              name: 'rctree',
              test: /[\\/]node_modules[\\/]rc-tree/,
              chunks: 'all',
              priority: -1,
            },
            rccalendar: {
              name: 'rccalendar',
              test: /[\\/]node_modules[\\/]rc-calendar[\\/]/,
              chunks: 'all',
              priority: -1,
            },
            rctable: {
              name: 'rctable',
              test: /[\\/]node_modules[\\/]rc-table[\\/]es[\\/]/,
              chunks: 'all',
              priority: -1,
            },
            wang: {
              name: 'wang',
              test: /[\\/]node_modules[\\/]wangeditor[\\/]/,
              chunks: 'all',
              priority: -1,
            },
            // lodash: {
            //     name: 'lodash',
            //     test: /[\\/]node_modules[\\/]lodash[\\/]/,
            //     chunks: 'all',
            //     priority: -2,
            // },
            bizcharts: {
              name: 'bizcharts',
              test: /[\\/]node_modules[\\/]bizcharts[\\/]/,
              chunks: 'all',
              priority: 10,
            },
            xlsx: {
              name: 'xlsx',
              test: /[\\/]node_modules[\\/]xlsx[\\/]/,
              chunks: 'async',
              priority: 10,
            },
          },
        },
      },
    });
  }
};
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'browser',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // 快速刷新功能 https://umijs.org/config#fastrefresh
  fastRefresh: {},
  esbuild: {},
  webpack5: {},
  // chainWebpack: webpackPlugin,
  // plugins: [
  //   // https://github.com/zthxxx/react-dev-inspector
  //   new SentryCliPlugin({
  //     include: '.',
  //     ignoreFile: '.sentrycliignore',
  //     ignore: ['node_modules', 'webpack.config.js'],
  //     configFile: 'sentry.properties',
  //     release: info.version,
  //   }),
  //   // 'react-dev-inspector/plugins/umi/react-inspector',
  // ],
});

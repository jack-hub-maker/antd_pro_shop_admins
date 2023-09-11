// import { Integrations } from '@sentry/tracing';
// import { init } from '@sentry/react';

// if (process.env.NODE_ENV === 'production') {
//   init({
//     dsn: 'YOUR_SENTRY_DSN',
//     integrations: [
//       new Integrations.BrowserTracing(),
//     ],
//     tracesSampleRate: 1.0,
//   });

//   const createSentryMiddleware = require('@sentry/react').createSentryMiddleware;

//   const sentryMiddleware = createSentryMiddleware({
//     // 各种配置项，具体根据您的实际需求进行配置
//     // 可参考 Sentry 的官方文档：https://docs.sentry.io/platforms/javascript/guides/react/
//   });

//   app.use(sentryMiddleware);
// }

// export function patchRoutes({ routes }) {
//   // console.log(routes);
  
//   // routes[0]['routes'][1]['routes'][0]['routes'].unshift({
//   //     path: '/user2',
//   //     name: 'user',
//   //     icon: 'UserOutlined',
//   //   component: '@/pages/User',
//   // });
// }
import React from 'react';
import { withErrorBoundary } from '@sentry/react';
import * as Sentry from "@sentry/react";

const MyErrorBoundary = withErrorBoundary(({ children, error, componentStack, eventId }) => {
  // 错误处理逻辑
  console.error('error-sentry:', error);
  // 可选择性地发送错误到Sentry
  Sentry.captureException(error);
  return <div>发生了错误，请稍后重试。</div>;
});
export default MyErrorBoundary;

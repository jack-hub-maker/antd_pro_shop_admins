import {
  Button,
  // message
} from 'antd';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      //  isError: true
    };
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI

    return { hasError: true };
  }
  // componentDidCatch(error, errorInfo) {
  //   // 你同样可以将错误日志上报给服务器
  //   // logErrorToMyService(error, errorInfo);
  //   console.log(errorInfo)
  // }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ marginLeft: 5, color: 'red' }}>
          页面发生错误
          {/* <Button
            type="primary"
            onClick={() => {
              this.props.history.push(this.props.history);
              this.setState({ hasError: false }, () => {
                // this.props.history.push('/basic-service/index');
                this.setState({
                  hasError: false,
                });
              });
            }}
          >
            跳转
          </Button> */}
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;

import { Component } from 'react';

export const withEmptyData = (emptyText: any) => (WrappedComponent: any) => {
  return class extends Component {
    handleProps = (props: any) => {
      const newProps = { ...props };
      for (let key in props) {
        newProps[key] = props[key] === null ? emptyText : props[key];
      }
      return newProps;
    };
    render() {
      return <WrappedComponent {...this.handleProps(this.props)} />;
    }
  };
};
export const withLoading = (WrappedComponent: any) => {
  return class extends Component {
    render() {
      return this.props.loading ? <div>loading....</div> : <WrappedComponent {...this.props} />;
    }
  };
};

import React, { Component } from 'react';
import emitter from '@/utils/events';

class List extends Component {
    eventEmitter: any;
    constructor(props: any) {
        super(props);
    }
    state={
        message: 'List1',
    }
    componentDidMount() {
        // 组件装载完成以后声明一个自定义事件
        this.eventEmitter = emitter.addListener('changeMessage', (message) => {
            this.setState({
                message,
            });
        });
        // this.eventEmitter = emitter.addListener('reset', (message) => {
        //     this.setState({
        //         message,
        //     });
        // });
        emitter.on('reset', (message) => {
            this.setState({ message, });
        })
    }
    componentWillUnmount() {
        emitter.removeListener('changeMessage', this.eventEmitter);
        emitter.removeListener('reset', this.eventEmitter);
    }
    render() {
        return (
            <div>
                {this.state.message}
            </div>
        );
    }
}

export default List;


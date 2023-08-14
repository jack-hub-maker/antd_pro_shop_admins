import React from 'react';
import { Data, VirtualListProps, VirtualListState, PositionType } from './type';
import ItemRenderComponent from './ItemRender';
// import * as events from '../Utils/events';
import {
  initPositinoCache,
  binarySearch,
  updateItemSize,
  getListHeight,
  getStartOffset,
  getEndIndex,
} from './biz';

const NOOP = () => {};

// 缓存所有item的位置
let positions: Array<PositionType>;
class VirtualList extends React.PureComponent<VirtualListProps, VirtualListState> {
  constructor(props: VirtualListProps) {
    super(props);

    const { resources } = this.props;

    // 初始化缓存
    positions = initPositinoCache(props.estimatedItemSize, resources.length);
    this.state = {
      resources,
      startOffset: 0,
      listHeight: getListHeight(positions),

      scrollRef: React.createRef(), // 虚拟列表容器ref
      items: React.createRef(), // 虚拟列表显示区域ref
      visibleCount: 10, // 一页可视区域条数
      startIndex: 0, // 可视区域开始索引
      endIndex: 10, // // 可视区域结束索引
    };
  }

  componentDidMount() {
    // events.on(this.getEl(), 'scroll', this.onScroll, false);
    // events.on(this.getEl(), 'mousewheel', NOOP, false);
    window.addEventListener('scroll', this.onScroll, false);
    window.addEventListener('mousewheel', NOOP, false);

    // created() {
    // 	window.addEventListener('scroll', this.onScroll, false);
    // },
    // beforeDestory() {
    // 	window.removeEventListener('scroll', this.onScroll, false);
    // }

    // 根据渲染，计算最新的节点
    let visibleCount = this.getVisibleCount(this.props.estimatedItemSize);
    if (visibleCount === this.state.visibleCount || visibleCount === 0) {
      return;
    }
    // 因为 visibleCount变更， 更新endIndex, listHeight/ 偏移量
    this.updateState({ visibleCount, startIndex: this.state.startIndex });
  }

  componentDidUpdate() {
    this.updateHeight();
  }

  componentWillUnmount() {
    // events.off(this.getEl(), 'scroll', this.onScroll, false);
    // events.off(this.getEl(), 'mousewheel', NOOP, false);
    window.removeEventListener('scroll', this.onScroll, false);
    window.removeEventListener('mousewheel', NOOP, false);
  }

  static getDerivedStateFromProps(nextProps: VirtualListProps, prevState: VirtualListState) {
    const { resources, estimatedItemSize } = nextProps;
    if (resources !== prevState.resources) {
      positions = initPositinoCache(estimatedItemSize, resources.length);

      // 更新高度
      let listHeight = getListHeight(positions);

      // 更新总偏移量
      let startOffset = getStartOffset(prevState.startIndex, positions);

      let endIndex = getEndIndex(resources, prevState.startIndex, prevState.visibleCount);

      return {
        resources,
        listHeight,
        startOffset,
        endIndex,
      };
    }
    return null;
  }

  getEl = () => {
    let el = this.state.scrollRef || this.state.items;
    let parentEl: any = el.current?.parentElement;
    switch (window.getComputedStyle(parentEl)?.overflowY) {
      case 'auto':
      case 'scroll':
      case 'overlay':
      case 'visible':
        return parentEl;
    }
    return window.body;
  };

  updateState = ({ visibleCount, startIndex }: { visibleCount: number; startIndex: number }) => {
    // 根据新计算的节点，更新data数据
    this.setState({
      startOffset: getStartOffset(startIndex, positions),
      listHeight: getListHeight(positions),
      startIndex,
      visibleCount,
      endIndex: getEndIndex(this.state.resources, startIndex, visibleCount),
    });
  };

  getVisibleCount = (estimatedItemSize: number) => {
    return Math.ceil(this.getEl().offsetHeight / estimatedItemSize);
  };

  updateHeight = () => {
    let items: HTMLCollection = this.state.items.current?.children;
    if (!items.length) return;

    // 更新缓存
    updateItemSize(positions, items);

    // 更新总高度
    let listHeight = getListHeight(positions);

    // 更新总偏移量
    let startOffset = getStartOffset(this.state.startIndex, positions);

    this.setState({
      listHeight,
      startOffset,
    });
  };

  onScroll = () => {
    requestAnimationFrame(() => {
      let { scrollTop } = this.getEl();
      let startIndex = binarySearch(positions, scrollTop);

      // 因为 startIndex变更， 更新endIndex, listHeight/ 偏移量
      this.updateState({ visibleCount: this.state.visibleCount, startIndex });
    });
  };

  render() {
    const { ItemRender = ItemRenderComponent, extrea } = this.props;
    const { listHeight, startOffset, resources, startIndex, endIndex, items, scrollRef } =
      this.state;
    let visibleData = resources.slice(startIndex, endIndex);
    console.log('visibleData:', visibleData);
    console.log('startIndex:', startIndex);
    console.log('endIndex:', endIndex);

    return (
      <div ref={scrollRef} style={{ height: `${listHeight}px` }}>
        <ul
          ref={items}
          style={{
            transform: `translate3d(0,${startOffset}px,0)`,
          }}
        >
          {visibleData.map((data: Data, index: number) => {
            return (
              <li key={data.id || data.key || index} data-index={`${startIndex + index}`}>
                <ItemRender data={data} {...extrea} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default VirtualList;

import { ConfigProviderProps } from '../ConfigProvider/type';

export type Data = any;

export interface VirtualListState {
  resources: Array<Data>;
  listHeight: number; // list列表总高
  startOffset: number; // 可视区域距离顶部的偏移量
  
  scrollRef: React.RefObject<HTMLDivElement>; // 虚拟列表容器ref
  items: React.RefObject<HTMLUListElement>; // 虚拟列表显示区域ref
  visibleCount: number;  // 一页可视区域条数
  startIndex: number; // 可视区域开始索引
  endIndex: number; // 可视区域结束索引
}

export interface PositionType {
  index: number; // 缓存索引
  top: number; // 每一页距离顶部的位置
  height: number; // 页面高度
  bottom: number; // 每一页底部距离顶部的高度
}

export interface VirtualListProps extends ConfigProviderProps {
  resources: Array<Data>; // 获取数据
  ItemRender?: React.FC<any>; // virtual 列表父节点渲染的函数，默认为 (items, ref) => <ul ref={ref}>{items}</ul>
  extrea?: any; // 用于自定义ItemRender，传递其他参数
  estimatedItemSize?: number; // 预估高度（该数据可能是一个固定的高度，但是有时候也可能是动态的高度）
  key?: string; // 作为遍历时，生成item 的唯一key。需要是resources的数据具体的某个唯一值的字段。用于提高性能。默认顺序 自定义 -> id -> key -> index
  locale?: { [key in string]: string };
}

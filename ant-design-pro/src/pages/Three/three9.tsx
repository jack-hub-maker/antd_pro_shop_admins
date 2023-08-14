import VirtualList from './VirtualList';
import React, { useState } from 'react';

// 初始化列表数据
const getDatas = () => {
  const datas = [];
  for (let i = 0; i < 100000; i++) {
    datas.push(`${i} Item`);
  }
  return datas;
};
// 定义每一条数据显示的组件
const ItemRender = ({ data }: any) => {
  let dindex = parseInt(data);
  let lineHeight = dindex % 2 ? '40px' : '80px';
  return (
    <div style={{ lineHeight, background: dindex % 2 ? '#f5f5f5' : '#fff' }}>
      <h3>#{dindex} title name</h3>
      <p>尽情地书写你想编写的内容，不局限于页面高度</p>
    </div>
  );
};
const ItemRenderMemo = React.memo(ItemRender);

// 使用虚拟列表
export default () => {
  let [resources, setResources] = useState([]);
  const changeResources = () => {
    setResources(getDatas());
  };

  return (
    <div>
      <button onClick={changeResources}>click me </button>

      <div
        style={{
          height: '400px',
          overflow: 'auto',
          border: '1px solid #f5f5f5',
          padding: '0 10px',
        }}
      >
        <VirtualList ItemRender={ItemRenderMemo} resources={resources} estimatedItemSize={32} />
      </div>
    </div>
  );
};

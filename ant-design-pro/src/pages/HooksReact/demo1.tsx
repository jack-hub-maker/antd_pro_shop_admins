import React from 'react';
import TreeCom from './components/TreeCom';

const Demo1 = () => {
  const selectedKeys = 'parent 1';
  const treeData: any[] = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          disabled: true,
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
              disableCheckbox: true,
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
        },
      ],
    },
  ];
  return (
    <div>
      <TreeCom
        selectedKeys={selectedKeys}
        searchPlaceholder="搜索框提示文字"
        treeData={treeData}
        // onTreeSelect={(selectedKeys, selectedNodes) => {}}
      ></TreeCom>
      {/* <TreeCom
        searchPlaceholder="搜索框提示文字"
        checkable
        treeData={treeData}
        checkStrictly
        checkedKeys={checkedKeys}
        onTreeSelect={(selectedKeys, selectedNodes) => {}}
      ></TreeCom> */}
    </div>
  );
};

export default Demo1;

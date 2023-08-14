import React, { useEffect, useState } from 'react';
import { Tree, Input } from 'antd';
const { TreeNode } = Tree;
const { Search } = Input;

const TreeCom = (props) => {
  const [treeData, setTreeData] = useState([]);
  const [copyTree, setCopyTree] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]); // 树节点展开key
  const [copyExpandedKeys, setCopyExpandedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  useEffect(() => {
    setTreeData(props.treeData);
    const expkey = expandedKeysFun(props.treeData);
    setExpandedKeys(expkey);
    setCopyExpandedKeys(expkey);
    setCopyTree(JSON.stringify(props.treeData));
  }, [props.treeData]);

  const expandedKeysFun = (treeData = []) => {
    if (treeData && treeData.length === 0) {
      return [];
    }
    let arr = [];
    const expandedKeysFn = (treeData) => {
      treeData.forEach((item, index) => {
        arr.push(item.key);
        if (item.children && item.children.length > 0) {
          expandedKeysFn(item.children);
        }
      });
    };
    expandedKeysFn(treeData);
    return arr;
  };
  const onExpand = (expandedKeys) => {
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };

  const [checkedKeys, setCheckedKeys] = useState([]);
  useEffect(() => {
    setCheckedKeys(props.checkedKeys);
  }, [props.checkedKeys]);
  const onTreeSelect = (selectedKeys) => {
    getSelectedTreeData(selectedKeys);
  };
  const onTreeCheck = (checkedKeys, info) => {
    const realCheckedKeys = props.checkStrictly ? checkedKeys.checked : checkedKeys; // 父节点是否与子节点关联
    setCheckedKeys(realCheckedKeys);
    getSelectedTreeData(realCheckedKeys);
  };
  const getSelectedTreeData = (selectedKeys) => {
    let selectedNodes = [];
    const getNodeFn = (treeData, key) => {
      treeData.forEach((item, index) => {
        if (item.key == key) {
          // 找到
          selectedNodes.push(item);
        } else if (item.children && item.children.length > 0) {
          getNodeFn(item.children, key);
        }
      });
    };
    selectedKeys.forEach((key) => getNodeFn(props.treeData, key));
    props.onTreeSelect(selectedKeys, selectedNodes);
  };

  const [searchValue, setSearchValue] = useState('');
  const arrayTreeFilter = (data, predicate, filterText) => {
    const nodes = data;
    if (!(nodes && nodes.length)) {
      // 如果已经没有节点了，结束递归
      return;
    }
    const newChildren = [];
    for (const node of nodes) {
      if (predicate(node, filterText)) {
        // 如果自己（节点）符合条件，直接加入到新的节点集
        newChildren.push(node);
        // 并接着处理其 children,（因为父节点符合，子节点一定要在，所以这一步就不递归了）
        node.children = arrayTreeFilter(node.children, predicate, filterText);
      } else {
        // 如果自己不符合条件，需要根据子集来判断它是否将其加入新节点集
        const subs = arrayTreeFilter(node.children, predicate, filterText);
        // 以下两个条件任何一个成立，当前节点都应该加入到新子节点集中
        // 1. 子孙节点中存在符合条件的，即 subs 数组中有值
        // 2. 自己本身符合条件
        if ((subs && subs.length) || predicate(node, filterText)) {
          node.children = subs;
          newChildren.push(node);
        }
      }
    }
    return newChildren;
  };
  const filterFn = (data, filterText) => {
    if (!filterText) {
      return true;
    }
    return new RegExp(filterText, 'i').test(data.title); // title过滤
  };
  const onSearchChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      // 为空时要回到最初的树节点
      setTreeData(JSON.parse(copyTree));
      setExpandedKeys(copyExpandedKeys);
    } else {
      const newTreeData = arrayTreeFilter(JSON.parse(copyTree), filterFn, value);
      const expkey = expandedKeysFun(newTreeData);
      setTreeData(newTreeData);
      setExpandedKeys(expkey);
    }
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const renderTreeNode = (data = []) => {
    // 生成树结构
    if (data.length == 0) {
      return;
    }
    return data.map((item) => {
      const index = item.title.indexOf(searchValue);
      const beforeStr = item.title.substr(0, index);
      const afterStr = item.title.substr(index + searchValue.length);
      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span style={{ color: 'red' }}>{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.title}</span>
        );
      if (item.children && item.children.length > 0) {
        return (
          <TreeNode key={item.key + ''} title={title}>
            {renderTreeNode(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key + ''} title={title}></TreeNode>;
    });
  };

  return (
    <>
      <Search
        style={{ marginBottom: 8 }}
        placeholder={props.searchPlaceholder}
        allowClear
        onChange={onSearchChange}
      />
      <Tree
        checkStrictly={props.checkStrictly}
        checkable={props.checkable}
        checkedKeys={checkedKeys}
        onCheck={onTreeCheck}
        showLine={true}
        autoExpandParent={autoExpandParent}
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        selectedKeys={props.selectedKeys || []}
        selectable={props.checkable ? false : true}
        onSelect={onTreeSelect}
      >
        {renderTreeNode(treeData)}
      </Tree>
    </>
  );
};

export default TreeCom;

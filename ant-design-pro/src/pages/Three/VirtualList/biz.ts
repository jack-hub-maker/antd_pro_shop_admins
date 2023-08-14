import { Data, PositionType } from './type';

// 缓存列表的总体初始化高度
export const initPositinoCache = (
  estimatedItemSize: number = 32,
  length: number = 0,
) => {
  let index = 0,
    positions = Array(length);
  while (index < length) {
    positions[index] = {
      index,
      height: estimatedItemSize,
      top: index * estimatedItemSize,
      bottom: (index++ + 1) * estimatedItemSize,
    };
  }
  return positions;
};

//二分法查找
export const binarySearch = (list: Array<PositionType>, value: number = 0) => {
  let start: number = 0;
  let end: number = list.length - 1;
  let tempIndex = null;
  while (start <= end) {
    let midIndex = Math.floor((start + end) / 2);
    let midValue = list[midIndex].bottom;

    // 值相等，则直接返回 查找到的节点（因为是bottom, 因此startIndex应该是下一个节点）
    if (midValue === value) {
      return midIndex + 1;
    }
    // 中间值 小于 传入值，则说明 value对应的节点 大于 start, start往后移动一位
    else if (midValue < value) {
      start = midIndex + 1;
    }
    // 中间值 大于 传入值，则说明 value 在 中间值之前，end 节点移动到 mid - 1
    else if (midValue > value) {
      // tempIndex存放最靠近值为value的所有
      if (tempIndex === null || tempIndex > midIndex) {
        tempIndex = midIndex;
      }
      end = midIndex - 1;
    }
  }
  return tempIndex;
};

export const updateItemSize = (
  positions: Array<PositionType>,
  items: HTMLCollection,
) => {
  Array.from(items).forEach(item => {
    let index = Number(item.getAttribute('data-index'));
    let { height } = item.getBoundingClientRect();
    let oldHeight = positions[index].height;

    //存在差值, 更新该节点以后所有的节点
    let dValue = oldHeight - height;
    if (dValue) {
      positions[index].bottom = positions[index].bottom - dValue;
      positions[index].height = height;

      for (let k = index + 1; k < positions.length; k++) {
        positions[k].top = positions[k - 1].bottom;
        positions[k].bottom = positions[k].bottom - dValue;
      }
    }
  });
};

export const getListHeight = (positions: Array<PositionType>) => {
  let index = positions.length - 1;
  return index < 0 ? 0 : positions[index].bottom;
};

export const getVisibleData = (
  resources: Array<Data> = [],
  startIndex: number,
  endIndex: number,
) => {
  return resources.slice(startIndex, endIndex);
};

//获取当前的偏移量
export const getStartOffset = (
  startIndex: number,
  positions: Array<PositionType> = [],
) => {
  return startIndex >= 1 ? positions[startIndex - 1]?.bottom : 0;
};

export const getEndIndex = (
  resources: Array<Data>,
  startIndex: number,
  visibleCount: number,
) => {
  let resourcesLength = resources.length;
  let endIndex = startIndex + visibleCount;
  return resourcesLength > 0 ? Math.min(resourcesLength, endIndex) : endIndex;
};

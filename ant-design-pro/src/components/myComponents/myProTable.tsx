/*
 * @Author: your name
 * @Date: 2021-10-31 13:04:23
 * @LastEditTime: 2021-11-18 18:04:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \星汉标准版\archives-web\src\components\myComponents\myProTable.tsx
 */
import { useRef, useState, useEffect } from 'react';
import type {
  ListToolBarProps,
  ProColumns,
  ProTableProps,
  TableRowEditable,
} from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { TablePaginationConfig } from 'antd';
import './index.less';
import { Resizable } from 'react-resizable';
import type { EditableProTableProps } from '@ant-design/pro-table/lib/components/EditableTable';
import { cloneDeep } from 'lodash';

import { getTableColumnsWidth, saveTableColumnsWidth } from '@/services/index';

/**
 *
 * 注意
 * 拖动表格 columns render 中的div 要自己处理 div中的宽度不能写死
 * 设置宽度时要考虑拖拽图标的20px宽度
 * 如果需要动态表头并且需要拖拽 需要传key值 每次更新刷新列表 key值不能是随机数 否则每次render 都会被执行
 *
 */

// 可拖动表格如果不需要拖拽 该列上添加属性isResizable=false  或者不设置dataIndex
type IProColumns = (ProColumns<any, any> & { isResizable?: boolean; titleName?: string })[];
interface UseTableProps {
  // 其他的查询参数
  searchOtherParams?: any;
  // 设置x轴的滚动条 拖动属性为true有效
  scrollX?: number;
  // 接口名称
  api?: (params: any) => Promise<any>;
  // 是否拖动
  isResizable?: boolean;
  // 在fileProps中的属性会覆盖默认的属性
  fileProps?: {
    columns: IProColumns;
  } & ProTableProps<any, any>;

  // 会与默认分页拼接
  pagination?: false | TablePaginationConfig | undefined;
  // 会与默认工具栏拼接
  toolbar?: ListToolBarProps | undefined;
  // 编辑属性
  editable?: TableRowEditable<any>;
  // 编辑表格传入的属性
  editFileProps?: EditableProTableProps<any, any>;
  // 请求数据后转化的数据格式方法
  formatData?: (parasms: any) => any;
  tableName?: string; // 表格名称
}
// 拖拽方法
const ResizeableTitle = (resizeProps: { [x: string]: any; cresize: any; width: any }) => {
  const { cresize, width, isResizable, ...restProps } = resizeProps;
  delete restProps.cresize;
  console.log('width:', width);

  if (!width) {
    return <th {...restProps} />;
  }
  // 如果 isResizable 为false 不添加拖拽
  if (isResizable === false) {
    return <th {...restProps} />;
  }
  return (
    <Resizable
      width={width}
      height={0}
      onResize={cresize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const MyProTable = (props: UseTableProps) => {
  const tableDom = useRef<HTMLDivElement>(null);
  const columnsWidthObj = useRef<Record<string, number | string>>({});
  const isDragegringRef = useRef<boolean>(false); // 是否正在拖动表头
  // 初始列
  const [defaultColumns, setDdefaultColumns] = useState<IProColumns>(
    props.fileProps?.columns || [],
  );
  // 滚动条 拖拽必需设置
  const [scrollX, setScrollX] = useState(0);
  // 覆盖默认的 table 元素
  const [components, setComponents] = useState<any>({
    cell: ResizeableTitle,
  });

  // 设置表头宽度为接接口返回的宽度
  const setColumnsWidth = (data) => {
    defaultColumns.forEach((item) => {
      if (typeof item.title === 'string') {
        if (data[item.title]) {
          item.width = data[item.title];
        }
      } else if (typeof item.titleName === 'string') {
        if (data[item.titleName]) {
          item.width = data[item.titleName];
        }
      }
    });
    setDdefaultColumns([...defaultColumns]);
  };

  useEffect(() => {
    if (props.isResizable) {
      setComponents({
        header: {
          cell: ResizeableTitle,
        },
      });
    }
  }, []);

  useEffect(() => {
    // 获取当前Table的所有TH
    setTimeout(() => {
      if (tableDom.current) {
        const theadThs = tableDom.current.getElementsByTagName('TH');
        // 记录隐藏列的个数    theadThs获取不到隐藏列的dom
        let count = 0;
        // 如果带复选框 不计算复选框的宽度
        if (props.fileProps?.rowSelection) {
          count -= 1;
        }
        const columnsCopy = cloneDeep(props.fileProps?.columns);
        // 获取当天所有TH的宽度总和 赋值给x轴的滚动条
        const total =
          columnsCopy?.reduce((num, item, index) => {
            if (item.hideInTable === true) {
              count += 1;
              return num;
            }
            // 修改默认列的宽度  （可能列设置了百分比或者没有设置宽度）
            Object.assign(item, {
              //  100 是防止报错
              width: theadThs[index - count]?.clientWidth + 0 || 100,
            });
            // 如果没有dataIndex 给拖拽属性设置false 不添加拖拽功能
            if (!item.dataIndex) {
              Object.assign(item, {
                isResizable: false,
              });
            }
            return Number(item.width) + num;
          }, 0) || scrollX;
        // 表头宽度总和小于 传入的 scrollX 则用 计算宽度 否则用传入的 scrollX
        const num = total < (props?.scrollX || 0) ? total : props?.scrollX || 0;
        setScrollX(num);
        if (props.fileProps) {
          setDdefaultColumns(columnsCopy as IProColumns);
        }
      }
    }, 500);
  }, []);

  // 监听鼠标弹起
  useEffect(() => {
    // 获取表格宽度接口
    if (props.tableName) {
      getTableColumnsWidth({ tableName: props.tableName }).then((res) => {
        console.log('表头宽度数据', res);
        try {
          const data = JSON.parse(res.data.headerLength);
          columnsWidthObj.current = data;
          setColumnsWidth(data);
        } catch (error) {
          console.error(error);
        }
      });
    }

    const fn = () => {
      if (isDragegringRef.current && props.tableName) {
        setDdefaultColumns((columns) => {
          const obj: Record<string, any> = {};
          columns.forEach((item) => {
            if (typeof item.title === 'string') {
              obj[item.title] = item.width;
            } else if (typeof item.titleName === 'string') {
              obj[item.titleName] = item.width;
            } else {
              console.error(
                '因为表头需要保存宽度，请在columns里面的加上title或者titleName为string类型',
              );
            }
          });

          console.log(obj);
          saveTableColumnsWidth({ tableName: props.tableName, headerLength: JSON.stringify(obj) });
          return columns;
        });
        isDragegringRef.current = false;
      }
    };

    window.addEventListener('mouseup', fn);

    return () => {
      window.removeEventListener('mouseup', fn);
    };
  }, []);

  // 查询数据
  const queryData = async (params: any) => {
    if (props.api) {
      const res = await props.api({
        ...params,

        pageSize: params.pageSize,
        page: params.current,
        ...props.searchOtherParams,
      });
      const data = props.formatData
        ? props.formatData(res.data.records || res.data)
        : res.data.records || res.data;

      return {
        data,
        success: res.code === 200,
        total: res.data.records ? res.data.total : res.data.length,
      };
    }
    return {
      data: [],
      success: false,
      total: 0,
    };
  };

  // 表格所有属性
  const tableAllProps: ProTableProps<any, any> = {
    rowKey: 'id',
    pagination: {
      pageSize: 10,
      ...props.pagination,
    },
    toolbar: {
      ...props.toolbar,
    },

    request: async (params = {}) => queryData(params),
    ...props.fileProps,
  };

  // 拖动传true 会添加自定义表头和拖拽方法
  if (props.isResizable && defaultColumns) {
    const columns = defaultColumns.map((col, index) => ({
      ...col,
      onHeaderCell: (): any => {
        return {
          width: col.width || 100,
          isResizable: col.isResizable,
          cresize: (_e: any, { size }: { size: any }) => {
            // console.log(11111);
            isDragegringRef.current = true;
            const nextColumns = [...columns];
            nextColumns[index] = {
              ...nextColumns[index],
              width: size.width,
            };
            // console.log(nextColumns)
            const total = nextColumns.reduce((num, item) => {
              return Number(item.width) + num;
            }, 0);
            // 如果宽度总和小于传入的宽度 使用计算的宽度
            if (total < scrollX) {
              setScrollX(total);
            }
            setDdefaultColumns(nextColumns);
          },
        };
      },
    }));
    Object.assign(tableAllProps, {
      columns,
    });
    tableAllProps.scroll = { x: scrollX };
    tableAllProps.components = components;
    tableAllProps.tableLayout = 'fixed';
  }

  const editFileProps: EditableProTableProps<any, any> = {
    rowKey: 'id',
    // recordCreatorProps: {
    //   record: () => {
    //     return { id: Date.now() };
    //   },
    // },
    editable: {
      type: 'multiple',
      ...props.editable,
    },
    ...props.editFileProps,
  };

  return (
    <div ref={tableDom}>
      {props.editFileProps ? (
        <EditableProTable {...editFileProps} />
      ) : (
        <ProTable {...tableAllProps} />
      )}
    </div>
  );
};

// 设置组件默认props
MyProTable.defaultProps = { isResizable: true };

export default MyProTable;

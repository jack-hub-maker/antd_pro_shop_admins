/*
 * @Author: your name
 * @Date: 2021-10-31 13:04:23
 * @LastEditTime: 2021-11-12 09:26:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /archives-web/src/components/myComponents/myProTable.tsx
 */
import React, { useRef, useState, useEffect } from 'react';
import type { ActionType, ProColumns, ProTableProps } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { FormInstance } from 'antd';
import './index.less';
import { Resizable } from 'react-resizable';
/**
 * 注意
 * 拖动表格 columns render 中的div 要自己处理 div中的宽度不能写死
 *
 */
interface UseTableProps extends ProTableProps<any, any> {
  // 接口名称
  api?: (params: any) => Promise<any>;
  // 是否拖动
  isResizable?: boolean;
}

const useMyProTable = (
  props: UseTableProps,
): [
  (tableProps: UseTableProps) => JSX.Element,
  UseTableProps,
  React.Dispatch<React.SetStateAction<UseTableProps>>,
] => {
  const formRef = useRef<FormInstance>();
  const actionRef = useRef<ActionType>();
  // table的dom元素
  const tableDom = useRef<HTMLDivElement>(null);
  // proTabble 默认属性
  const [tableDefaultProps, setTableDefaultProps] = useState<UseTableProps>({
    actionRef,
    formRef,
    rowKey: 'id',
    tableClassName: `${props.tableClassName || ''}`,
    pagination: {
      pageSize: 10,
      ...props.pagination,
    },
    toolbar: {
      ...props.toolbar,
    },
    form: {
      ...props.form,
    },
    ...props,
  });

  // 查询数据
  const queryData = async (params: any) => {
    if (tableDefaultProps.api) {
      const res = await tableDefaultProps.api({
        ...params,
        pageSize: params.pageSize,
        page: params.current,
      });

      return {
        data: res.data.records,
        success: res.code === 200,
        total: res.data.total,
      };
    }
    return {
      data: [],
      success: false,
      total: 0,
    };
  };
  // 拖拽方法
  const ResizeableTitle = (resizeProps: { [x: string]: any; cresize: any; width: any }) => {
    const { cresize, width, ...restProps } = resizeProps;
    delete restProps.cresize;

    if (!width) {
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
  // ProTable组件  tableProps是proTable官方文档属性 如果传值会覆盖默认值
  const MyProTable = (tableProps: UseTableProps) => {
    // 初始列
    const [defaultColumns, setDdefaultColumns] = useState<ProColumns<any, 'text'>[] | undefined>(
      tableProps.columns || [],
    );
    // 滚动条 拖拽必需设置
    const [scrollX, setScrollX] = useState(0);
    // 覆盖默认的 table 元素
    const [components, setComponents] = useState<any>({
      cell: ResizeableTitle,
    });
    useEffect(() => {
      if (props.isResizable) {
        setTimeout(() => {
          if (!tableDom.current) {
            return;
          }
          // 获取当前Table的所有TH
          const theadThs = tableDom.current.getElementsByTagName('TH');
          // 记录隐藏列的个数    theadThs获取不到隐藏列的dom
          let count = 0;
          // 获取当天所有TH的宽度总和 赋值给x轴的滚动条
          const total =
            tableProps?.columns?.reduce((num, item, index) => {
              if (item.hideInTable === true) {
                count += 1;
                return num;
              }
              // 修改默认列的宽度  （可能列设置了百分比或者没有设置宽度）
              Object.assign(item, {
                width: theadThs[index - count]?.clientWidth || 100,
              });
              return Number(item?.width || 100) + num;
            }, 0) || scrollX;

          setScrollX(total);

          setDdefaultColumns(tableProps.columns);
        }, 500);

        setComponents({
          header: {
            cell: ResizeableTitle,
          },
        });
      }
    }, []);
    // 表格所有属性
    const tableAllProps = {
      request: async (params = {}) => queryData(params),
      ...tableDefaultProps,
      ...tableProps,
    };

    if (props.isResizable && defaultColumns) {
      const columns = defaultColumns.map((col, index) => ({
        ...col,
        onHeaderCell: (): any => {
          return {
            width: col.width || 100,
            cresize: (e: any, { size }: { size: any }) => {
              const nextColumns = [...columns];
              nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
              };
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
    }

    delete tableAllProps.api;
    return (
      <div ref={tableDom}>
        <ProTable {...tableAllProps} />
      </div>
    );
  };
  // 动态修改默认值
  const setTableProps = (params: React.SetStateAction<UseTableProps>) => {
    setTableDefaultProps({
      ...tableDefaultProps,
      ...params,
    });
  };
  // 自定义hooks 返回的值 [ProTable组件,tableParams默认属性,修改默认属性方法]
  return [MyProTable, tableDefaultProps, setTableProps];
};

export default useMyProTable;

/* eslint-disable react/no-children-prop */
import React, { useState, useEffect, useRef } from 'react';
import { Tabs } from 'antd';
import { history } from 'umi';
import { Route } from 'dva/router';
import NotFound from '@/pages/404';
import { MyButton } from '@/components/myComponents';
import ProCard from '@ant-design/pro-card';
import { connect } from 'umi';
import type { ConnectState } from '@/models/connect';
import ErrorBoundary from './ErrorBoundary';
import { routesToTile } from '@/utils/utils';

const { TabPane } = Tabs;

interface IProps {
  homePage?: any;
  location?: any;
  route?: any;
  menuNameObj?: any;
}
const RightTabbs = (props: IProps) => {
  // console.log('props-1:', props);
  useEffect(() => {
    // 数据处理
    const ac = routesToTile().map((item: { name: any; path?: any, chineseName?: any }) => {
      return {
        label: item.path,
        value: item.chineseName,
      };
    });
    // console.log('ac:', ac);
    const ab = new Map();
    ac.forEach((item: { label: any; value: any }) => {
      ab.set(item.label, item.value);
    });
    // console.log('cccc:', Object.fromEntries(ab));

    seRrightTabData(Object.fromEntries(ab))
  }, []);

  const tmps = {
    '/dashboard': '统计面板',
    '/user': '用户面板',
    '/goods': '商品面板',
    '/category': '分类面板',
    '/order': '订单面板',
  }
  const [rightTabData, seRrightTabData] = useState<Object>({});//右侧菜单tab项
  const [activeKey, setActiveKey] = useState(props.homePage);
  // 路由tab页数据
  const [routeTabsList, setRouteTabsList] = useState({});
  const [routeTabs, setRouteTabs] = useState<string[]>([]);
  // 全部路由path
  const allRoutePath = useRef<any>([]);

  // 存储到session中
  const setStates = (
    routerList: React.SetStateAction<{}>,
    pathname: React.SetStateAction<string>,
  ) => {
    setRouteTabsList(routerList);
    setActiveKey(pathname);
    setRouteTabs(Object.keys(routerList));
    sessionStorage.setItem('AntTabs', JSON.stringify(Object.keys(routerList)));
  };

  // 获取要渲染的tabs数据
  const renderTabs = (sessionRoutes?: any) => {
    const {
      location: { pathname },
    } = props;
    //
    const newpathname = pathname === '/' ? props.homePage : pathname;
    routeTabsList[props.homePage] = {
      key: props.homePage,
      tab: allRoutePath.current[props.homePage]?.name,
      path: allRoutePath.current[props.homePage]?.path,
      content: allRoutePath.current[props.homePage]?.content,
      exact: allRoutePath.current[props.homePage]?.exact,
    };
    // 如果有session路由  全部取出  (刷新页面执行)
    if (sessionRoutes) {
      sessionRoutes.forEach((item: string | number) => {
        routeTabsList[item] = {
          key: item,
          tab: allRoutePath.current[newpathname]?.name,
          path: allRoutePath.current[item]?.path,
          content: allRoutePath.current[item]?.content,
          exact: allRoutePath.current[item]?.exact,
        };
      });
      setStates(routeTabsList, newpathname);
    } else {
      // 新增标签方法
      routeTabsList[newpathname] = {
        key: newpathname,
        tab: allRoutePath.current[newpathname]?.name,
        path: allRoutePath.current[newpathname]?.path,
        content: allRoutePath.current[newpathname]?.content,
        exact: allRoutePath.current[newpathname]?.exact,
      };

      setStates(routeTabsList, newpathname);
    }
  };
  // 平铺所有路由备用
  const getAllrouters = (data: any) => {
    const treeData = data;
    const treeList: any[] = [];
    const getTreeList = (tree: any[]) => {
      tree.forEach((node) => {
        Object.assign(treeList, {
          // 添加参数路由判断  (暂未测试结果)
          [node.path ? node.path.replace(/:[A-Za-z]+\(([^)]+)\)/, '$1') : '/404']: {
            name: node.name ? node.name : '404',
            key: node.path ? node.path.replace(/:[A-Za-z]+\(([^)]+)\)/, '$1') : '/404',
            path: node.path || '/404',
            content: node.component,
            exact: node.exact,
          },
        });

        if (node.children && node.children.length > 0) {
          getTreeList(node.children);
        }
      });
    };
    getTreeList(treeData);
    return treeList;
  };
  useEffect(() => {
    const {
      route: { routes },
    } = props;
    // 获取routes.ts 中的路由
    allRoutePath.current = getAllrouters(routes);
    // 获取存在session中的路由  (刷新页面时把已经打开的路由存储起来) 如果session中没有存储获取默认打开的路由
    const getSessionRoutes = JSON.parse(sessionStorage.getItem('AntTabs') as string) || [
      props.homePage,
    ];
    if (getSessionRoutes) {
      renderTabs(getSessionRoutes);
    }
  }, []);
  useEffect(() => {
    // 可以防止打开的页面刷新
    renderTabs();
  }, [props.location]);

  // 切换tab标签
  const callback = (key: string) => {
    setActiveKey(key);
    history.push(key);
  };

  const onEdit = (
    key: string | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    action: 'add' | 'remove',
  ) => {
    const {
      location: { pathname },
    } = props;
    if (action === 'remove') {
      delete routeTabsList[key as string];
      const tabKeys = Object.keys(routeTabsList);
      const homePage = pathname !== key ? pathname : tabKeys[tabKeys.length - 1];

      setRouteTabs(tabKeys);
      history.push(homePage);
      setStates(routeTabsList, homePage);
    }
  };
  const closeAllTabs = () => {
    // 关闭所有 保留默认页面
    const indexRoutes = {
      [props.homePage]: {
        key: props.homePage,
        tab: allRoutePath.current[props.homePage]?.path,
        path: allRoutePath.current[props.homePage]?.path,
        content: allRoutePath.current[props.homePage]?.content,
        exact: allRoutePath.current[props.homePage]?.exact,
      },
    };
    setActiveKey(props.homePage);
    history.push(props.homePage);
    setStates(indexRoutes, props.homePage);
  };

  return (
    <ProCard className="Tavsmain">
      <Tabs
        tabBarExtraContent={
          routeTabs.length > 5 && (
            <MyButton
              text="关闭全部"
              fileProps={{
                onClick: () => {
                  closeAllTabs();
                },
              }}
            />
          )
        }
        className="mytabs"
        type="editable-card"
        onChange={callback}
        activeKey={activeKey}
        hideAdd
        onEdit={onEdit}
      >

        {Object.keys(rightTabData).length > 0 &&
          routeTabs.map((item) => {
            const { tab, key, content: Content, path, exact } = routeTabsList[item];
            // console.log('path', path);
            return (
              <React.Fragment key={key}>
                <TabPane
                  tab={rightTabData[path] || (path === props.homePage ? '首页' : '404')}
                  key={key}
                  closable={key !== props.homePage}
                  style={{
                    overflow: 'auto',
                    // height: 'calc(100vh - 180px)',
                  }}
                >
                  {/* <React.Fragment></React.Fragment> */}
                  <Route
                    key={tab}
                    path={path}
                    children={(propsP) =>
                      Content ? (
                        <ErrorBoundary>
                          {' '}
                          <Content {...propsP} />{' '}
                        </ErrorBoundary>
                      ) : (
                        <NotFound />
                      )
                    }
                    exact={exact}
                  />
                </TabPane>
              </React.Fragment>
            );
          })}
      </Tabs>
    </ProCard>
  );
};

export default connect(({ menu }: ConnectState) => ({
  menuNameObj: menu.menuNameObj,
}))(RightTabbs);

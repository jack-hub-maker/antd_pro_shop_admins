/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-13 14:50:45
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-04-11 16:17:26
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/pages/DashBoard/index.tsx
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, RightOutlined, EllipsisOutlined } from '@ant-design/icons';
import { fetchDashboard } from '@/services/dashboard'
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
const { Statistic } = StatisticCard;

const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
const imgStyle = {
    display: 'block',
    width: 42,
    height: 42,
};
const DashBoard = () => {
    const [data, setData] = useState<any>({})
    const [responsive, setResponsive] = useState(false);

    useEffect(() => {
        getfetchDashboard()
    }, [])

    const getfetchDashboard = async () => {
        //发送请求获取统计数据
        const res = await fetchDashboard()
        setData(res)
    }

    return (
        <div>
            <Card>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card>
                            <Statistic
                                title="用户数"
                                value={data.users_count}
                                style={divStyle}
                                icon={(
                                    <img
                                        style={imgStyle}
                                        src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                                        alt="icon"
                                    />
                                )}
                                precision={0}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}

                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic
                                title="商品数"
                                value={data.goods_count}
                                style={divStyle}
                                icon={(
                                    <img
                                        style={imgStyle}
                                        src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                                        alt="icon"
                                    />
                                )}
                                precision={0}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined />}

                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Statistic
                                title="订单数"
                                value={data.order_count}
                                style={divStyle}
                                icon={(
                                    <img
                                        style={imgStyle}
                                        src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                                        alt="icon"
                                    />
                                )}
                                precision={0}
                                valueStyle={{ color: '#234abc' }}
                                prefix={<ArrowDownOutlined />}

                            />
                        </Card>
                    </Col>
                </Row>


            </Card>
            <Card>
                <RcResizeObserver
                    key="resize-observer"
                    onResize={(offset) => {
                        setResponsive(offset.width < 596);
                    }}
                >
                    <ProCard split={responsive ? 'horizontal' : 'vertical'}>
                        <StatisticCard
                            colSpan={responsive ? 24 : 6}
                            title="财年业绩目标"
                            statistic={{
                                value: 82.6,
                                suffix: '亿',
                                description: <Statistic title="日同比" value="6.47%" trend="up" />,
                            }}
                            chart={
                                <img
                                    src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
                                    alt="进度条"
                                    width="100%"
                                />
                            }
                            footer={
                                <>
                                    <Statistic value="70.98%" title="财年业绩完成率" layout="horizontal" />
                                    <Statistic value="86.98%" title="去年同期业绩完成率" layout="horizontal" />
                                    <Statistic value="88.98%" title="前年同期业绩完成率" layout="horizontal" />
                                </>
                            }
                        />
                        <StatisticCard.Group
                            colSpan={responsive ? 24 : 18}
                            direction={responsive ? 'column' : undefined}
                        >
                            <StatisticCard
                                statistic={{
                                    title: '财年总收入',
                                    value: 601987768,
                                    description: <Statistic title="日同比" value="6.15%" trend="up" />,
                                }}
                                chart={
                                    <img
                                        src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                                        alt="折线图"
                                        width="100%"
                                    />
                                }
                            >
                                <Statistic
                                    title="大盘总收入"
                                    value={1982312}
                                    layout="vertical"
                                    description={<Statistic title="日同比" value="6.15%" trend="down" />}
                                />
                            </StatisticCard>
                            <StatisticCard
                                statistic={{
                                    title: '当日排名',
                                    value: 6,
                                    description: <Statistic title="日同比" value="3.85%" trend="down" />,
                                }}
                                chart={
                                    <img
                                        src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                                        alt="折线图"
                                        width="100%"
                                    />
                                }
                            >
                                <Statistic
                                    title="近7日收入"
                                    value={17458}
                                    layout="vertical"
                                    description={<Statistic title="日同比" value="6.47%" trend="up" />}
                                />
                            </StatisticCard>
                            <StatisticCard
                                statistic={{
                                    title: '财年业绩收入排名',
                                    value: 2,
                                    description: <Statistic title="日同比" value="6.47%" trend="up" />,
                                }}
                                chart={
                                    <img
                                        src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                                        alt="折线图"
                                        width="100%"
                                    />
                                }
                            >
                                <Statistic
                                    title="月付费个数"
                                    value={601}
                                    layout="vertical"
                                    description={<Statistic title="日同比" value="6.47%" trend="down" />}
                                />
                            </StatisticCard>
                        </StatisticCard.Group>
                    </ProCard>
                </RcResizeObserver>
            </Card>
        </div>
    )
}

export default DashBoard

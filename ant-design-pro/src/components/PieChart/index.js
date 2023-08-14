import ReactECharts from 'echarts-for-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './index.less';
import chunk from 'lodash/chunk';
const colorList = [
  ['#60ACFB', '#FEB74F'],
  ['#F9816F', '#FEB74D', '#D4EC59'],
  ['#F9816F', '#FFDA43', '#D4EC59', '#60ACFB'],
  ['#F9816F', '#FFDA43', '#F2F55C', '#9CDD82', '#60ACFB'],
  ['#FB816D', '#FEB74D', '#F2F55C', '#D4EC59', '#31D3EA', '#60ACFB'],
  [
    '#D15B7E',
    '#F9816F',
    '#FEB74D',
    '#FFDA43',
    '#F2F55C',
    '#D4EC59',
    '#9CDD82',
    '#31D3EA',
    '#22C2DC',
    '#60ACFB',
  ],
  [
    '#D15B7E',
    '#F9816F',
    '#FEB74D',
    '#FFDA43',
    '#F2F55C',
    '#D4EC59',
    '#9CDD82',
    '#31D3EA',
    '#22C2DC',
    '#60ACFB',
    '#7179DF',
  ],
  [
    '#D15B7E',
    '#F9816F',
    '#FF9F69',
    '#FEB74D',
    '#FFDA43',
    '#FFE167',
    '#FFE68D',
    '#D4EC59',
    '#9CDD82',
    '#31D3EA',
    '#22C2DC',
    '#60ACFB',
    '#668FD5',
    '#7179DF',
  ],
];
const PieChart = ({
  loadingOption,
  loading,
  data = [],
  title,
  subItemsLength = 7,
  onChange,
  linkage = false, // 是否联动
}) => {
  const ref = useRef();
  const [activeIndex, setActiveIndex] = useState();
  const getOption = () => {
    return {
      tooltip: {
        trigger: 'item',
        position: 'bottom',
        show: true,
        // formatter: (params) => {
        //   return PieChart.tooltipFormat(params);
        // },
        extraCssText: 'width:300px !important;height:auto; white-space: pre-wrap !important;',
      },
      legend: {
        show: false,
      },
      series: [
        {
          name: title,
          type: 'pie',
          radius: [45, 90],
          data,
          itemStyle: {
            normal: {
              color: (param) => currentColorList[param.dataIndex],
              borderColor: '#fff',
              borderWidth: 1,
            },
          },
          label: {
            show: false,
            minMargin: 15,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {},
          },
        },
      ],
    };
  };

  const currentColorList = useMemo(() => {
    return colorList.find((item) => item.length >= data.length) || colorList[colorList.length - 1];
  }, [data]);
  const currentLegendArr = useMemo(() => {
    return chunk(data, subItemsLength);
  }, [data]);

  const itemOnclick = (index, activeData) => {
    const echartsInstance = ref.current.getEchartsInstance();

    echartsInstance.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: data.map((item, _) => _),
    });
    if (index !== activeIndex) {
      setActiveIndex(index);
      echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index,
      });
    } else {
      setActiveIndex(undefined);
    }
  };
  const onChartReady = (instance) => {
    instance.on('click', (params) => {
      onChange(params.data);
    });
  };
  return (
    <div className={styles.pieChartWrap}>
      <div className={styles.title}>{title}</div>
      <div className={styles.chart}>
        <ReactECharts
          ref={ref}
          notMerge={true}
          lazyUpdate={true}
          style={{ width: '100%', height: '100%' }}
          loadingOption={loadingOption}
          showLoading={loading}
          onChartReady={onChartReady}
          option={getOption()}
        />
      </div>
      <div className={styles.legendWrap}>
        {currentLegendArr.map((items, itemsIndex) => {
          return (
            <div className={styles.subItems} key={itemsIndex}>
              {items.map((item, index) => {
                const currentIndex = itemsIndex === 0 ? index : index + subItemsLength;
                return (
                  <div
                    className={styles.item}
                    onClick={() => {
                      linkage && itemOnclick(currentIndex);
                      onChange(item);
                    }}
                    key={index}
                  >
                    <div
                      className={styles.dot}
                      style={{
                        backgroundColor:
                          itemsIndex === 0
                            ? currentColorList[index]
                            : currentColorList[index + subItemsLength],
                      }}
                    ></div>
                    <div
                      style={{
                        color: activeIndex === currentIndex ? '#2558E6' : undefined,
                        cursor: onChange ? 'pointer' : undefined,
                      }}
                      className={styles.itemTitle}
                    >
                      {item.name}
                    </div>
                    <div className={styles.num}>{item.value}</div>
                    <div className={styles.rate}>{item.rate}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChart;

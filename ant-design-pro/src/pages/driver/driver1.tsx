import React, { useEffect } from 'react';
import styles from './driver1.less';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const Driver1 = () => {
  const driverObj = driver({
    showProgress: true,
    // allowClose: false,
    animate: true,
    showButtons: ['next', 'previous', 'close'],
    nextBtnText: '下一步',
    prevBtnText: '上一步',
    steps: [
      {
        element: '#tour1',
        popover: {
          title: 'Popover Title',
          description: 'Popover Description',
          side: 'left',
        },
      },
      {
        element: '#story1',
        popover: {
          title: 'Popover Title322',
          description: 'Popover Description',
          side: 'bottom',
        },
      },
      {
        element: '.koala1',
        popover: {
          title: 'Popover Title2',
          description: 'Popover Description',
          side: 'right',
        },
      },
    ],
  });

  useEffect(() => {
    // driverObj.drive();
  }, []);
  const clciks = () => {
    driverObj.drive();
  };

  return (
    <div>
      <p>《I LOVE YOU TOO》。漫画作者 CHOW HON LAM，马来西亚漫画家、插画家。</p>
      <div>
        <button id="story1" onClick={() => clciks()}>
          故事1
        </button>
      </div>
      <div id="tour1" className={styles.tour}>
        <img
          width="500"
          height="500"
          // src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          // src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5efaea22e8794a31afe9f238109e6a90~tplv-k3u1fbpfcp-watermark.image"
          src="https://cdn.jsdelivr.net/gh/fjc0k/yapi-to-typescript/assets/logo.png"
        />
        <div className={styles.crocodile1}></div>
        <div className={styles.koala1}></div>
      </div>
    </div>
  );
};

export default Driver1;

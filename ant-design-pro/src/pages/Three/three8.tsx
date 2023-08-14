import { Button, message, Steps, Card } from 'antd';
import React, { useState } from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import styles from './three8.less';
import PieChart from '@/components/PieChart';
const data = new Array(5).fill({
  name: '测试1',
  value: 20,
  rate: '20%',
});
const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item, index) => ({
    key: item.title,
    title: item.title,
    // icon: <UserOutlined />,
    icon: <div className={styles.circle}>123</div>,
    description: current == index && (
      <Button
        onClick={() => {
          // console.log('1item:', item?.title);
          alert(item?.title);
        }}
      >
        发起
      </Button>
    ),
  }));

  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>
        <Card style={{}}>
          <span>
            <PieChart data={data} title="测试" onChange={(val: any) => console.log(val)} />
          </span>
        </Card>
        <Card style={{}}>
          <span>
            <PieChart data={data} title="测试" onChange={(val: any) => console.log(val)} />
          </span>
        </Card>
        <Card style={{}}>
          <span>
            <PieChart data={data} title="测试" onChange={(val: any) => console.log(val)} />
          </span>
        </Card>
        <Card style={{}}>
          <span>
            <PieChart data={data} title="测试" onChange={(val: any) => console.log(val)} />
          </span>
        </Card>
        <Card style={{}}>
          <span>
            <PieChart data={data} title="测试" onChange={(val: any) => console.log(val)} />
          </span>
        </Card>
      </div>
      <div>
        <Steps current={current} items={items} />
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;

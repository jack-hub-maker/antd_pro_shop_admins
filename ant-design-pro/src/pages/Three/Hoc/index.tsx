import { withEmptyData, withLoading } from './components/index';
import { useEffect, useState } from 'react';
const Item = ({ name, age, address }: any) => {
  return (
    <div>
      name: {name} --- age:{age} --- address:{address}
    </div>
  );
};

const WithEmptyItem = withEmptyData('暂无数据')(Item);
const mockData = {
  name: 'rose',
  age: null,
  address: null,
};

// const Test = () => <WithEmptyItem {...mockData} />;
// export default Test;

const withEmptyDataItem = withEmptyData('暂无数据')(Item);
const LoadingItem = withLoading(withEmptyDataItem);

const Test = () => {
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(false);

  return (
    <div>
      {flag && <LoadingItem loading={loading} {...mockData} />}
      <button
        onClick={() => {
          setFlag(true);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
          // setLoading(false);
        }}
      >
        点击获取数据
      </button>
    </div>
  );
};
export default Test;

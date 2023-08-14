import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import 'rsuite/styles/index.less';
import { useState, useEffect } from 'react';

const Demo2 = () => {
  // const [list, SetList] = useState<any>([]);
  // useEffect(() => {
  //   SetList();
  // }, []);
  function getTodoList(date: any, changeFlage?: boolean) {
    let day;
    // console.log('date:', date);
    if (changeFlage) {
      return [
        { time: '18:30 am', title: '123' },
        { time: '19:00 pm', title: '321' },
      ];
    } else {
      day = date.getDate();
    }
    switch (day) {
      case 12:
        return [
          { time: '10:30 am', title: 'Meeting' },
          { time: '12:00 pm', title: 'Lunch' },
        ];
      // case 15:
      //   return [
      //     { time: '09:30 pm', title: 'Products Introduction Meeting' },
      //     { time: '12:30 pm', title: 'Client entertaining' },
      //     { time: '02:00 pm', title: 'Product design discussion' },
      //     { time: '05:00 pm', title: 'Product test and acceptance' },
      //     { time: '06:30 pm', title: 'Reporting' },
      //     { time: '10:00 pm', title: 'Going home to walk the dog' },
      //   ];
      default:
        return [];
    }
  }
  const handleChange = (value: any) => {
    // console.log('value:', value);
    getTodoList(value, true);
  };
  function renderCell(date: any) {
    // console.log('date:', date);

    const list = getTodoList(date);
    // console.log('list:', list);
    // SetList(list);

    const displayList = list.filter((item, index) => index < 2);
    console.log('displayList:', displayList);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>
                    <b>{item.time}</b> - {item.title}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} more</a>
          </Whisper>
        </li>
      );

      return (
        <ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <li key={index}>
              <Badge /> <b>{item.time}</b> - {item.title}
            </li>
          ))}
          {moreCount ? moreItem : null}
        </ul>
      );
    }

    return null;
  }

  return <Calendar bordered renderCell={renderCell} onChange={handleChange} />;
};

export default Demo2;

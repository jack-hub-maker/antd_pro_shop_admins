import React, { useState } from "react";
import { Modal } from 'antd';
import moment from "moment";
import ReactCalendar from 'react-calendar-operate';
import MonthSwitch from "./MonthSwitch";
import data from "./data";

const Demo = () => {
    const [monthDate, setMonthDate] = useState(moment());

    const handleMonthChange = (selectedDate: any) => {
        setMonthDate(selectedDate)
    };


    const handleChangeState = (params: any) => {
        console.log('修改状态', params)
    };

    const handleDelete = (params: any) => {
        Modal.confirm({
            title: `是否删除${params?.name}活动？`,
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                console.log('执行删除', params)
            }
        });
    };

    const handleEdit = (params: any) => {
        console.log('跳转编辑界面', params)
    };

    return (
        <>
            {/* <MonthSwitch className ={'1'} defaultDate={monthDate} onChange={handleMonthChange} /> */}
            <ReactCalendar
                date={monthDate}
                tasks={data}
                handleChangeState={handleChangeState}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </>
    )
};

export default Demo;
import React, { Component } from "react";
import { cloneDeep, chunk } from "lodash";
import "./checkCalendar.less"
import moment from "moment";
import { DatePicker, Space } from 'antd';

const weeks = ["日", "一", "二", "三", "四", "五", "六"];
class CheckCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dateTable: [],
            isCheck: [],
            isEdit: false, //是否可编辑状态
        }
        this.ref = {
            chooseYear: new Date() //选择的年份
        }
        this.calendar = React.createRef();
        this.mask = React.createRef();
    }
    componentWillMount() {
        this.initDateTable()
        // this.csway()
    }
    //年切换
    onChange = (date, dateString) => {
        console.log(date, dateString);
        // console.log('dateeee:', new Date(moment(date)));
        this.ref.chooseYear = new Date(moment(date))
        this.initDateTable()
        this.setState({
            isEdit: false, // 退出编辑状态
            isCheck: []// 清空保存数据
        })
    };
    initDateTable() {
        let temp = []
        for (let i = 0; i < 12; i++) { // 取一年内的日期
        // for (let i = 0; i < 3; i++) { // 取近三月内的日期
            let obj = this.getDateTable(i);
            temp.push(obj);
        }
        console.log(temp);
        this.setState({
            dateTable: temp
        })
    }
    getDateTable(plus) {
        console.log('plus:', plus);
        // let curDate = new Date() //现在时间
        let curDate = this.ref.chooseYear;
        console.log('curDate现在时间:', curDate);
        let curYear = curDate.getFullYear();
        // let curMonth = curDate.getMonth() + 1;
        let curMonth = 1;
        let curDay = curDate.getDate();
        if (curMonth + plus > 12) {
            curYear++
            curMonth = curMonth + plus - 12
        } else {
            curMonth += plus
        }
        let date = new Date(curYear, curMonth, 0);
        let year = date.getFullYear(); // 当前年
        let month = date.getMonth() + 1; // 当前月
        // console.log(`${year}年${month}月.`);

        let date2 = new Date(year, month, 0);
        let days = date2.getDate(); // 当月有多少天
        console.log(`当月有${days}天.`);

        date2.setDate(1);
        let day = date2.getDay(); // 当月第一天是星期几
        let isWeek = 0
        console.log(`当月第一天是星期${day}.`);
        // 设置月初、月末时间
        let MonthStart = year + '-' + month + '-' + '01'
        let MonthOver = year + '-' + month + '-' + days
        // 将月初月末时间转换为日期类型
        MonthStart = this.stringToDate(MonthStart)
        MonthOver = this.stringToDate(MonthOver)
        console.log('MonthStart:', MonthStart);
        console.log('MonthOver:', MonthOver);
        // 定义一天的毫秒数为baseTime
        let baseTime = 1000 * 60 * 60 * 24;
        // 定义一个空数组用来存储休息日
        let restData = []
        while ((MonthStart.getTime() - MonthOver.getTime()) <= 0) {
            if (MonthStart.getDay() == 6 || MonthStart.getDay() == 0) {
                restData.push(MonthStart)
            }
            MonthStart = new Date(MonthStart.getTime() + baseTime)
        }
        console.log('restData:', restData);
        const isWeekDayData = restData.map((item) => {
            return item.getDate()
        })
        console.log('isWeekDayData:', isWeekDayData);

        let list = [];

        for (let i = 0; i < days + day; i++) {
            if (i < day) { //头部补零
                list.push({
                    isWeekDay: false,
                    // isActive: false,
                    isActive: isWeekDayData.includes(i - day + 1),
                    number: 0
                });
            } else if (plus === 0) {
                if ((i - day + 1) < curDay) {
                    list.push({
                        isWeekDay: isWeekDayData.includes(i - day + 1),
                        disable: true,
                        // isActive: false,
                        isActive: isWeekDayData.includes(i - day + 1),
                        number: i - day + 1
                    });
                } else {
                    list.push({
                        isWeekDay: isWeekDayData.includes(i - day + 1),
                        // isActive: false,
                        isActive: isWeekDayData.includes(i - day + 1),
                        number: i - day + 1
                    });
                }
            } else {
                list.push({
                    isWeekDay: isWeekDayData.includes(i - day + 1),
                    // isActive: false,
                    isActive: isWeekDayData.includes(i - day + 1),
                    number: i - day + 1
                });
            }
        }
        let hlist = chunk(list, 7); // 转换为二维数组

        console.log('hlist:', hlist);
        let len = hlist.length;
        let to = 7 - hlist[len - 1].length;

        // 循环尾部补0
        for (let i = 0; i < to; i++) {
            hlist[len - 1].push({
                isWeekDay: false,

                isActive: false,
                number: 0
            });
        }
        if (month < 10) {
            month = "0" + month
        }
        const str = `${year}-${month}`
        console.log('str::', str);
        return {
            list: hlist,
            desc: str
        }
    }
    // 构建一个可以将yyyy-yy-yy类型字符串转换为date类型的function
    stringToDate(dateString) {
        dateString = dateString.split('-');
        return new Date(dateString[0], dateString[1] - 1, dateString[2]);
    }
    csway() {
        // 获取当前年月
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let date2 = new Date(year, month, 0);
        let days = date2.getDate(); // 当月有多少天
        console.log('days:', days);
        // 设置月初、月末时间
        let MonthStart = year + '-' + month + '-' + '01'
        let MonthOver = year + '-' + month + '-' + days
        // 将月初月末时间转换为日期类型
        MonthStart = this.stringToDate(MonthStart)
        MonthOver = this.stringToDate(MonthOver)
        console.log('MonthStart:', MonthStart);
        console.log('MonthOver:', MonthOver);

        // 定义一天的毫秒数为baseTime
        let baseTime = 1000 * 60 * 60 * 24;
        // 定义一个空数组用来存储休息日
        let restData = []
        while ((MonthStart.getTime() - MonthOver.getTime()) <= 0) {
            if (MonthStart.getDay() == 6 || MonthStart.getDay() == 0) {
                restData.push(MonthStart)
            }
            MonthStart = new Date(MonthStart.getTime() + baseTime)
        }
        console.log('restData:', restData);
        console.log('restData3:', restData.map((item) => {
            return item.getDate()
        }));
    }

    handleItemClick(desc, number, index, index1, index2) {
        if (!this.state.isEdit) { //如果不是可编辑状态
            return
        }
        let temp = cloneDeep(this.state.dateTable)
        const flag = !temp[index].list[index1][index2].isActive
        temp[index].list[index1][index2].isActive = flag
        this.setState({
            dateTable: temp,
        })
        const arr = desc.split("-");
        if (number < 10) {
            number = "0" + number
        }
        if (flag) {
            temp = cloneDeep(this.state.isCheck);
            temp.push(arr[0] + "-" + arr[1] + "-" + number)
            console.log('temp:', temp);
            this.setState({
                isCheck: temp
            })
        } else {
            temp = cloneDeep(this.state.isCheck);
            let filted = temp.filter((item) => {
                return item !== arr[0] + "-" + arr[1] + "-" + number
            })
            this.setState({
                isCheck: filted
            })
        }
    }
    render() {
        return this.props.visible ? (
            <div>
                <DatePicker onChange={this.onChange} picker="year" style={{ display: 'flex', width: '300px' }} />
                <div ref={this.mask} className="calendar-mask">
                    <div ref={this.calendar} className="calendar-wrap animated fadeInUp">
                        {/* <div className="header">日期多选
                    <div className="exit" onClick={() => {
                        this.calendar.current.classList.remove("fadeInUp")
                        this.calendar.current.classList.add("fadeOutDown")
                        this.mask.current.classList.add("animated", "fadeOut")
                        setTimeout(() => {
                            this.props.onClose()
                            this.props.onConfirm(this.state.isCheck)

                        }, 150)
                    }}></div>
                    </div> */}
                        <div className="week-wrap">
                            {
                                weeks.map((item, index) => (
                                    <div className="week-item" key={index}>{item}</div>
                                ))
                            }
                        </div>
                        {this.state.dateTable.map((item, index) => {
                            console.log('this.state.dateTable:', this.state.dateTable);

                            const arr = item?.desc?.split("-");
                            console.log('arr2:', arr);
                            return (
                                <div className="date-table" key={index}>
                                    <div className="desc">{arr[0] + "年" + arr[1] + "月"}</div>
                                    {item.list.map((item2, index2) => {
                                        // console.log('item2:', item2);
                                        return (<div className="row" key={index2}>
                                            {item2.map((item3, index3) => {
                                                // console.log('item3:', item3);
                                                return (<DateItem itemClick={this.handleItemClick.bind(this, item.desc, item3.number, index, index2, index3)}
                                                    active={item3.isActive}
                                                    // disable={item3.disable ? item3.disable : false} 
                                                    number={item3.number}
                                                    key={index3}>

                                                </DateItem>)
                                            })}
                                        </div>)
                                    })}
                                </div>
                            );
                        })}
                        <div className="fake-area"></div>
                    </div>
                    <div className="confirm-wrap">
                        <div className="confirm" onClick={() => {
                            this.calendar.current.classList.remove("fadeInUp")
                            this.calendar.current.classList.add("fadeOutDown")
                            this.mask.current.classList.add("animated", "fadeOut")
                            this.setState({
                                isEdit: true
                            })
                        }}>
                            编辑
                        </div>
                        <div className="confirm" onClick={() => {
                            this.calendar.current.classList.remove("fadeInUp")
                            this.calendar.current.classList.add("fadeOutDown")
                            this.mask.current.classList.add("animated", "fadeOut")
                            // setTimeout(() => {
                            //     this.props.onConfirm(this.state.isCheck)
                            // }, 150)
                            console.log('保存的数据:', this.state.isCheck)
                            this.initDateTable()// 清空选中
                            this.setState({
                                isCheck: []// 清空保存数据
                            })
                        }}>
                            保存
                        </div>
                        <div className="confirm"
                            onClick={() => {
                                this.initDateTable()// 清空选中
                                this.setState({
                                    isEdit: false, // 退出编辑状态
                                    isCheck: []// 清空保存数据
                                })
                            }}>
                            取消
                        </div>
                    </div>
                </div>
            </div>
        ) : (<span></span>)
    }
}
function DateItem(props) {
    return props.number === 0 ? (<div className="date-wrap">
        <span className="left"></span><div className="item"></div><span className="right"></span>
    </div>) : props.disable ? (<div className="date-wrap">
        <span className="left"></span><div className="item disable">{props.number}</div><span className="right"></span>
    </div>) : (<div className="date-wrap">
        <span className="left"></span><div className={`item ${props.active ? 'active' : ''}`} onClick={props.itemClick} >{props.number}</div><span className="right"></span>
    </div>)
}
export default CheckCalendar;
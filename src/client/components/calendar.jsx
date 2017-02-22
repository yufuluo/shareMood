import React, {PropTypes} from "react";
import {connect} from "react-redux";
import CalendarBody from "./calendarBody";
import CalendarHeader from "./calendarHeader";
import Note from "./note";

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      today : new Date()
    };
  }

  render() {
    let days = (this.props.info.year % 4 === 0 && this.props.info.year % 100 != 0 || this.props.info.year % 400 === 0) ? this.props.stat.leap : this.props.stat.common;
    let prevMonthDay = this.props.info.month === 0 ? 31 : days[this.props.info.month - 1];
    let todate = (this.props.info.month === this.state.today.getMonth() && this.props.info.year === this.state.today.getFullYear()) ? this.state.today.getDate() : -1;

    return (
      <div className="calendar">
        <div className="calendarBorder">
          <CalendarHeader month={this.props.info.month} year={this.props.info.year} />
          <CalendarBody daysInCurrMonth={days[this.props.info.month]} 
          daysInPrevMonth={prevMonthDay} 
          firstDay={new Date((this.props.info.month + 1) + "/01/" + this.props.info.year).getDay()} 
          today={todate}/>
        </div>
        <Note date={this.props.selectedDay.date} month={this.props.selectedDay.month} year={this.props.selectedDay.year} today={todate}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  // console.log(state);
  return state;
};

export default connect(mapStateToProps)(Calendar);

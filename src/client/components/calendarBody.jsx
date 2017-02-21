import React, {PropTypes} from "react";
import {connect} from "react-redux";
import reduce from "../reducers";


class CalendarBody extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  prevMonth(days, first) {
    let prev = days;
    const arr1 = [];
    for (let i = 0; i < first; i++) {
      arr1.splice(0, 0, prev);
      prev--
    }
    return arr1;
  }

  currMonth(days) {
    const arr2 = [];
    for (let i = 1; i <= days; i++) {
      arr2.push(i);
    }
    return arr2;
  }

  nextMonth(days, first) {
    let next = 42 - days - first;
    const arr3 = [];
    for (let i = 1; i <= next; i++) {
      arr3.push(i);
    }
    return arr3;
  }

  handleClick(date) {
    this.props.dispatch({type: "SELECT_DATE", 
      date: {
        date: date,
        month: this.props.info.month,
        year: this.props.info.year
    }});
  }

  _renderPrevMonth() {
    return this.prevMonth(this.props.daysInPrevMonth, this.props.firstDay).map((date) => (
      <li key={"prev"+date} className="prevMonth"> {date} </li>
    ));
  }

  _renderCurrMonth() {
    let today = this.props.today;
    let selectedDay = this.props.selectedDay;
    return this.currMonth(this.props.daysInCurrMonth).map( (date) => {
      if (date === today) {
        return <li key={"curr"+date} className="currvMonth today" onClick={() => this.handleClick(date)}> {date} </li>
      }
      if (date === selectedDay.date && this.props.info.month === selectedDay.month && this.props.info.year === selectedDay.year) {
        return <li key={"curr"+date} className="currvMonth selectedDay" onClick={() => this.handleClick(date)}> {date} </li>
      }
      return <li key={"curr"+date} className="currMonth" onClick={() => this.handleClick(date)}> {date} </li>
    });
  }

  _renderNextMonth() {
    return this.nextMonth(this.props.daysInCurrMonth, this.props.firstDay).map((date) => (
      <li key={"next"+date} className="nextMonth"> {date} </li>
    ));
  }

   _renderWeekdays() {
    return this.props.weekdays.map((day) => (
      <li key={""+day}> {day} </li>
    ));
  }

  render() {
    return (
      <div className="cldDays">
        <div className="weekday">
          <ul>    
            {this._renderWeekdays()}
          </ul>
        </div>
        <div className="CalendarDay">
          <ul>
          {this._renderPrevMonth()}
          {this._renderCurrMonth()}
          {this._renderNextMonth()}
          </ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {selectedDay: state.selectedDay,
          info: state.info,
          weekdays: state.stat.NameofDay
  };
};

export default connect(mapStateToProps)(CalendarBody);

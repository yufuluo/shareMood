import React, {PropTypes} from "react";
import {connect} from "react-redux";
import reduce from "../reducers";
import leftTriangle from "../images/left-triangle.svg";
import rightTriangle from "../images/right-triangle.svg";

class CalendarHeader extends React.Component {

  handleLeftClick() {
    this.props.dispatch({type: "PREV_MONTH", move: 1});
    setTimeout(() => this.handleChange(this.props.month), 0);
  }

  handleRightClick() {
    this.props.dispatch({type: "NEXT_MONTH", move: 1});
    setTimeout(() => this.handleChange(this.props.month), 0);
    // this.handleChange();
  }

  handleChange(month) {
    month = (month >= 9) ? ("" + (month + 1)) : ("0" + (month + 1));
    const data = {
      // userId: this.props.userId,
      currMonth: parseInt(this.props.year +  month)
    };

    fetch("/changeMonth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => {
      return res.json();
    }).then((data) => {
      // console.log(data);
      this.props.dispatch({type: "CHANGE_MONTH", data: data});
        // this.setState({info: info, showDeals: true});
    }).catch((err) => {
      this.setState({serverError: err.message || "There's an error in our server, please try again later."});
    });
  }

  render() {
    return (
      <div>
        <div className="headerborder">
          <img className="triangle" src={leftTriangle} alt="leftTriangle" onClick={this.handleLeftClick.bind(this)}/>
          <div className="currentMonth">
            <p> {this.props.months[this.props.month]} </p>
            <p> {this.props.year} </p>
          </div>
          <img className="triangle" src={rightTriangle} alt="rightTriangle" onClick={this.handleRightClick.bind(this)}/>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {months: state.stat.months};
};

export default connect(mapStateToProps)(CalendarHeader);

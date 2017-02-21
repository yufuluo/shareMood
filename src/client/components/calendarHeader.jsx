import React, {PropTypes} from "react";
import {connect} from "react-redux";
import reduce from "../reducers";
import leftTriangle from "../images/left-triangle.svg";
import rightTriangle from "../images/right-triangle.svg";

class CalendarHeader extends React.Component {

  handleLeftClick() {
    this.props.dispatch({type: "PREV_MONTH", move: 1});
  }

  handleRightClick() {
    this.props.dispatch({type: "NEXT_MONTH", move: 1});
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

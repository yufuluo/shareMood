import React, {PropTypes} from "react";
import {connect} from "react-redux";
import reduce from "../reducers";

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
          <p> {this.props.months[this.props.month]} </p>
          <p> {this.props.year} </p>
          <p className="triangle-left" onClick={this.handleLeftClick.bind(this)}> </p>
          <p className="triangle-right" onClick={this.handleRightClick.bind(this)}> </p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {months: state.stat.months};
};

export default connect(mapStateToProps)(CalendarHeader);

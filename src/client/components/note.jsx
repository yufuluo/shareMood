import React from "react";
import {connect} from "react-redux";
import happy from "../images/happy.svg";
import smile from "../images/smile.svg";
import sad from "../images/sad.svg";
import cry from "../images/cry.svg";
import great from "../images/great.svg";
import ok from "../images/ok.svg";
import ill from "../images/ill.svg";
import tired from "../images/tired.svg";
import normal from "../images/normal.svg";
import period from "../images/period.svg";
import intercourse from "../images/intercourse.svg";
import protect from "../images/protected.svg";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      mood: "",
      health: "",
      period: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    //if (!this.refs.form.isValidForm()) {
    //  throw "Invalid form";
    //}

    const data = {
      // userId: this.props.userId,
      mood: this.refs.itemName.value.trim(),
      health: this.refs.description.value.trim(),
      period: this.refs.price.value.trim()
    };
  }

  handleChange() {

  }

  _renderIcon(arr) {
    return arr.map( (icon) => {
      return (
        <span key={""+icon}>
          <input type="radio" value={""+icon} />
          <img className="icon" src={icon} alt={""+icon}/>
        </span>
      );
    });
  }


  render() {
    return (
      <div className="form_box background">
        <h3 className="center"> {this.props.months[this.props.month]} {this.props.date} {this.props.year} </h3>
        <h3 className="center"> Hey! How are you today? </h3>
        <form ref="form">

        <label>
          What is your mood?
          <div>
            {this._renderIcon([happy, smile, sad, cry])}
          </div>
        </label>

          <label>
            How your body feels?
            <div>
              {this._renderIcon([great, ok, ill, tired])}
            </div>
          </label>

          <label>
            Are you on your period or do you have sexual intercourse?
            <div>
              {this._renderIcon([normal, period, intercourse, protect])}
            </div>
          </label>

          <button type="button" value="Submit" onClick={this.handleSubmit.bind(this)} > Submit </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {months: state.stat.brMonths};
}

export default connect(mapStateToProps)(Note);

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
      mood: this.state.mood,
      health: this.state.health,
      period: this.state.period
    };
  }

  handleChangeMood(event) {
    this.setState({mood: event.target.value});
  }

  handleChangeHealth(event) {
    this.setState({health: event.target.value});
  }

  handleChangePeriod(event) {
    this.setState({period: event.target.value});
  }

  _renderIconMood(arr) {
    return arr.map((icon) => {
      return (
        <span key={icon[1]}>
          <input type="radio" value={icon[1]} checked={this.state.mood === icon[1]} onChange={this.handleChangeMood.bind(this)} />
          <img className="icon" src={icon[0]} alt={icon[1]}/>
        </span>
      );
    });
  }

  _renderIconHealth(arr) {
    return arr.map((icon) => {
      return (
        <span key={icon[1]}>
          <input type="radio" value={icon[1]} checked={this.state.health === icon[1]} onChange={this.handleChangeHealth.bind(this)} />
          <img className="icon" src={icon[0]} alt={icon[1]}/>
        </span>
      );
    });
  }

  _renderIconPeriod(arr) {
    return arr.map((icon) => {
      return (
        <span key={icon[1]}>
          <input type="radio" value={icon[1]} checked={this.state.period === icon[1]} onChange={this.handleChangePeriod.bind(this)} />
          <img className="icon" src={icon[0]} alt={icon[1]}/>
        </span>
      );
    });
  }


  render() {
    return (
      <div className="form_box background">
        <h3 className="center"> {this.props.months[this.props.month]} {this.props.date} {this.props.year} </h3>
        <h3 className="center"> Hey! {this.props.today === this.props.date ? "How are you today" : "What's special on this day"}? </h3>
        <form ref="form">

        <label>
          What is your mood?
          <div>
            {this._renderIconMood([[happy, "happy"], [smile, "smile"], [sad, "sad"], [cry,"cry"]])}
          </div>
        </label>

          <label>
            How your body feels?
            <div>
              {this._renderIconHealth([[great, "great"], [ok, "ok"], [ill, "ill"], [tired,"tired"]])}
            </div>
          </label>

          <label>
            Are you on your period or do you have sexual intercourse?
            <div>
              {this._renderIconPeriod([[normal, "normal"], [period, "period"], [intercourse, "intercourse"], [protect,"protect"]])}
            </div>
          </label>

          <label>
            Note and schedule
            <textarea rows="4" cols="38" placeholder="Write your note and schedule here..." ref="Note">
            </textarea>
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

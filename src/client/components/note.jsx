import React from "react";
import {connect} from "react-redux";
import happy from "../images/happy.svg";

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


  render() {
    return (
      <div className="form_box background">
        <h3 className="center"> {this.props.months[this.props.month]} {this.props.date} {this.props.year} </h3>
        <h3 className="center"> Hey! How are you today? </h3>
        <form ref="form">

        <label>
          Your mood
          <div>
            <span>
              <input type="radio" value="happy" />
              <img className="icon" src={happy} alt="happy"/>
            </span>
          </div>
        </label>

          <label>
            How your body feels?
            <input
              className="ui-input inputField" 
              type="description"
              placeholder="Description" 
              name="description" 
              ref="description" 
              invalidClassName="ui-error"
              onChange={this.handleChange.bind(this)}
            />
          </label>

          <label>
            Are you on your period?
            <input
              className="ui-input inputField" 
              type="text"
              placeholder="Price" 
              name="price" 
              ref="price" 
              invalidClassName="ui-error"
              onChange={this.handleChange.bind(this)}
            />
          </label>

          <button type="button" value="Submit" onClick={this.handleSubmit.bind(this)} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {months: state.stat.brMonths};
}

export default connect(mapStateToProps)(Note);

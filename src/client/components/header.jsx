import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h2 className="slogan">Welcome to Share Mood</h2>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);

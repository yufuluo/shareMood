import React from "react";
import { connect } from "react-redux";
import face from"../images/girl-face.svg";
import linkedin from"../images/linkedin-logo.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1 className="slogan">Welcome to Share Mood</h1>
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <footer>
          <a href="https://www.linkedin.com/in/qijun-kay-liu-9283ba34/"><img className="footer_img" src={linkedin} alt="linkedin"/></a>
          <a href="https://qijunliu7.com/"><img className="footer_img" src={face} alt="personal page"/></a>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);

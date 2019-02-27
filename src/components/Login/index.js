import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  render() {
    return (
      <div>
          <div className="login-form">
          <div className="input-box">
            <label>NetId</label>
            <input type="text" placeholder="Enter Netid"></input>
          </div>
          <div className="input-box">
            <label>Password</label>
            <input type="password" placeholder="enter password"></input>
          </div>
          <Link to="/dashboard">
            <button className="btn login">Login</button>
          </Link>
      </div>
    </div>

    );
  }
}

import React from "react";
import "./login.css";

export default function LoginScreen() {
  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-title">Welcome to Chito Stationery Admin Dashboard.</div>
          <div className="login-box">
            <div className="title">SIGN IN</div>
            <div className="login-subtitle">Email</div>
            <div>
              <input type="email" />
            </div>
            <div className="login-subtitle">Password</div>
            <div>
              <input type="password" />
            </div>
            <div>
              <button className="btn-common primary-btn">SIGN IN</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

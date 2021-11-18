import React from "react";
import "./login.css";

export default function LoginScreen() {
  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-title">Welcome to Chito Stationery Admin Dashboard.</div>
          <div className="login-box shadow-sm">
            <div className="title text-align-center mb-27">SIGN IN</div>
            <div className="login-subtitle mb-9">Email</div>
            <div>
              <input className="input-common login-input mb-18" type="email" />
            </div>
            <div className="login-subtitle mb-9">Password</div>
            <div>
              <input className="input-common login-input mb-27" type="password" />
            </div>
            <div className="text-align-center">
              <button className="btn-common primary-btn">SIGN IN</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

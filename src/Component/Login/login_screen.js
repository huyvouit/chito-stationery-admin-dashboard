import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/auth_context";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import "./login.css";

export default function LoginScreen() {
  const { loginUser, authState } = useContext(AuthContext);
  const [validationMsg, setValidationMsg] = useState({});
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;

    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        console.log("sd");
        toast.success(loginData.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        // console.log(authState);
        handleLoginSucessful();
      } else {
        toast.error(loginData.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  let history = useHistory();
  const handleLoginSucessful = () => {
    history.push("/");
  };

  const validateAll = () => {
    const msg = {};
    if (isEmpty(username)) {
      msg.username = "Please input username.";
    }
    if (isEmpty(password)) {
      msg.password = "Please input password.";
    }
    // console.log("sdsd");
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-title">
            Welcome to Chito Stationery Admin Dashboard
          </div>
          <div className="login-box shadow-sm">
            <div className="title text-align-center mb-27">SIGN IN</div>
            <div className="login-subtitle mb-9">Username</div>
            <div className="mb-18">
              <input
                className="input-common login-input "
                type="text"
                required
                name="username"
                value={username}
                onChange={onChangeLoginForm}
              />
              <p style={{ color: "red" }}>{validationMsg["username"]}</p>
            </div>
            <div className="login-subtitle mb-9">Password</div>
            <div className="mb-27">
              <input
                className="input-common login-input "
                type="password"
                required
                name="password"
                value={password}
                onChange={onChangeLoginForm}
              />
              <p style={{ color: "red" }}>{validationMsg["password"]}</p>
            </div>
            <div className="text-align-center">
              <button className="btn-common primary-btn" onClick={login}>
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

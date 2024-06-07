import React, { useState } from "react";
// import "../../css/Auth.css";
// import logo from "../../assets/Brand_logo.svg";
import logo from "../../assets/images/Brand_logo.jpg"
import "./Auth.css"

function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login">
      <div className="container login_page">
        <h2 className="login_heading">Please enter Your log in credential</h2>
        <img src={logo} alt="Brandlogo" className="logo" />
        <div className="login_Box">
          <div>
            <p className="Log_label">User Name</p>
            <input
              type="text"
              placeholder="Enter your user name.."
              className="Log_Input"
            />
          </div>
          <div>
            <p className="Log_label">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password.."
              className="Log_Input"
            />
          </div>
          <button className="my-button">Submit</button>
          <p className="forget_password">Forget your Password?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

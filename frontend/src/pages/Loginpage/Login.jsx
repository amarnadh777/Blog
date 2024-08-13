import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
function Login() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="login">
        <div className="loginbox">
          <div className="login-inputs">
            <h4>Sign in</h4>
            <label htmlFor="">Email or mobile phone number</label>
            <input type="text"></input>
            <label htmlFor="">Your password</label>
            <input type="password"></input>
            
            <button>Log in </button>
            <p>
              <Link>Forgot password</Link>
            </p>
          </div>
        </div>

        <div className="login-second">
          {" "}
          <hr width="30%" /> New to our blog <hr width="30%" />{" "}
        </div>
        <Link to="/register">
          {" "}
          <div className="login-create">
            <button>Create account</button>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;

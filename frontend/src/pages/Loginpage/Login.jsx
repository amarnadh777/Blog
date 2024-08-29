import React, { useState } from "react";
import "./Login.css";
import { Form, Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
function Login() {
  const navigate = useNavigate()
  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')
  const [errorMessage,seterrorMessage] = useState('')
 
  const login = async(e) =>
  {
    e.preventDefault()
     const data = {username:username,password:password}
     
    try {
      const response = await axios.post("http://localhost:8000/api/author/login",data)
      console.log(response)
      if(response.status == 200)
      { 
    
      }    const authorInfo = JSON.stringify(response.data)
        localStorage.setItem("authorInfo",authorInfo)
        navigate("/")
     
      
    } catch (error) {
      console.log(error);
      
      if(error.response.status == 401)
      {
        seterrorMessage("username or password incorrect")
        
      }

      
    }
    
  }

  console.log("error message",errorMessage)
  
        
  return (
    
    <div>
      <Navbar></Navbar>
      {/* <Sidebar></Sidebar> */}
    

      <div className="login">
        <div className="loginbox">

          <div className="login-inputs">
            <h4>Sign in</h4>
      

            <label htmlFor="">Email or mobile phone number</label>
            <input type="text" onChange={(e) =>
              {
                setusername(e.target.value)
              }
            }></input>
            <label htmlFor="">Your password</label>
            <input type="password" name="password" autoComplete="on" onChange={(e) => { setpassword(e.target.value)}}></input>
            
            <button onClick={login}>Log in </button>
           
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

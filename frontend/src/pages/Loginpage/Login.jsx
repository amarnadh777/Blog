import React, { useContext, useState } from "react";
import "./Login.css";
import { Form, Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Loading from "../../Components/Loading/Loading";
import { useDispatch } from "react-redux";
import authorLogin from "../../Redux/actions";
import DarkmodeContext from "../../Utils/Mycontext";
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {setAuthorDetails} = useContext(DarkmodeContext)
  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')

  const [error,seterror] = useState("")
  const [loading,setloading] = useState(false)
  const login = async(e) =>
  {
    e.preventDefault()
     const data = {username:username,password:password}
     
    try {
      setloading(true)
      const response = await axios.post("https://test-ndv4.onrender.com/api/author/login",data)
      console.log(response)
      if(response.status == 200)
      { 
        setloading(false)
        
       
        const authorInfo = JSON.stringify(response.data)
        localStorage.setItem("authorInfo",authorInfo)
        navigate("/")
         
         
      
      }    
   
      
    } catch (error) {
      setloading(false)
      console.log(error);
      
      if(error.response == 401)
      {
        seterror("username or password incorrect")
        
      }

      
    }
    
  }

  console.log("error message",error)
  
        
  return (
    
    <div>
      <Navbar></Navbar>
      {/* <Sidebar></Sidebar> */}
    {loading && <Loading></Loading>}

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
           <p>{error}</p>
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

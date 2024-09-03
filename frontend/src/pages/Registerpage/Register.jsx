import React, { useContext, useState } from 'react'
import "./Register.css"

import Navbar from '../../Components/Navbar/Navbar'
import right from "./Illustration.svg"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DarkmodeContext from '../../Utils/Mycontext'

function Register() {
  const {useLogined,setuserLogined} = useContext(DarkmodeContext) 
    const navigate = useNavigate()
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const[authorname,setauthorname] = useState('')
    const[image,setimage] = useState()
    const formdata = new FormData()
    formdata.append("image",image)
    formdata.append("username",username)
    formdata.append("password",password)
    formdata.append("authorname",authorname)
     console.log(formdata);
     

 
   const register = async(e) =>

   {
    e.preventDefault()
                 
    try {                                   
        const response = await axios.post("https://test-ndv4.onrender.com/api/author/register",formdata)
        console.log(response.data);
        
     if(response.status == 200 )
     { 
         setuserLogined(true)
         const authorInfo = JSON.stringify(response.data)
         localStorage.setItem("authorInfo",authorInfo)
         navigate("/")

     }
       


        
    } catch (error) {
        console.log(error);
        
    }

   }
  return (
    <div>
        <Navbar></Navbar>
      <div className="register">

        
        <div className="register-box">
            <div className="left">
            <h3>Create a account</h3>
            <div className="register-inputs">
                <label htmlFor="">Enter a author name</label>
                <input type='text'onChange={(Event) =>{setauthorname(Event.target.value)}} ></input>
                <label htmlFor="">Enter  username</label>
                <input type='text' onChange={(Event) =>{setusername(Event.target.value)}}></input>
                <label htmlFor="">Enter your password</label>
                <input type='text' onChange={(Event) =>{setpassword(Event.target.value)}}></input> 
                <label htmlFor="">Add your profile image</label>
                <input type="file" name="image" id="" onChange={(Event) =>{setimage(Event.target.files[0])}} />
                <button onClick={register}>Create an account</button>
            </div>

            </div>
            <div className="right">

<img src={right} alt="" />
</div>
        </div>
      
        </div>
    </div>
  )
}

export default Register

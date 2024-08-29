import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Myprofile.css"
import amar from "./amarnadh.jpeg"
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Myprofile() {
const [responseData, setresponseData] = useState({}) 
const [edit, setedit] = useState(false)
const [username,setusername] = useState('')
const [authorname,setauthorname] = useState('')
const [password,setpassword] = useState('')

const {authorId} = useParams()

useEffect(() => {
  

  return async() => {
    try {
  const response =  await axios.get(`http://localhost:8000/api/author/myprofile/${authorId}`)
  setresponseData(response.data)
 
  

        
    } catch (error) {
        
    }
  }
}, [])
console.log("getprofileurl",responseData);
const editprofile = async(e) =>
  {
    e.preventDefault()
    try {
      const data = {authorId:authorId,username:username}
      const response = await axios.post("http://localhost:8000/api/author/editprofile",data)
      console.log(response);
      
      
    } catch (error) {
      console.log(error);
      
      
    }
  }
  
  return (

    <div>
    <Navbar></Navbar>
    <div className="myprofile">
      <div className="myprofile-bar">
        <img src={responseData.profileurl} alt="No profile image found" />
        <div className="myprofile-bar-right">
            <h3>Amarnadh</h3>
            
            <p>Author id : @{responseData.authorId}</p>

            <p>Username : {responseData.username}</p>
            <p>Authorname : {responseData.authorname}</p>
            <div className="myrofile-bar-button">
                <button onClick={() => { setedit(!edit)}}>Edit Profile</button>
            </div>

        </div>
      </div>{
        edit && <>   <div className="profile-edit">
          <label htmlFor="">Edit username</label>
        <input type="text" name="" id=""  placeholder='Edit username' onChange={(e)=>{setusername(e.target.value)}} />
        <label htmlFor="">Edit authorname</label>

        <input type="text" name="" id=""  placeholder='Edit authorame' />
        <label htmlFor="">Edit password</label>

        <input type="text" name="" id=""  placeholder='Edit password' />
        <label htmlFor="">Edit profile picture</label>

        <input type="file" placeholder='upload image' />
        <button onClick={editprofile}>Submit</button>

      </div></>
      }
    
    </div>
      
    </div>
  )
}

export default Myprofile

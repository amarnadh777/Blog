import React, { useState } from 'react'
import "./Createpost.css"
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import LoadingScreen from 'react-loading-screen';
import { PacmanLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
function Createpost() {
  const [postTitle,setpostTitle] = useState('')
  const [postContent,setpostContent] = useState('')
  const [postImage,setpostImage] = useState()
  const [Loading,setLoading] = useState(true)
  const navigate = useNavigate()
  const formdata = new FormData()
formdata.append("postTitle",postTitle)
formdata.append("postcontent",postContent)
formdata.append("image",postImage)
formdata.append("category","test")
formdata.append("authorId",localStorage.getItem("authorId"))


  const createpost = async() =>
    {
      const response =await axios.post("http://localhost:8000/api/post/createpost",formdata)
      console.log(response.data);
      setLoading(true)
      if(response.status == 200)
      {
         
         
         setLoading(false)
         navigate(`/postdetails/${response.data.postId}`)
      }
    }
  return (
   
    <div>
      <Navbar></Navbar>

     {Loading && <PacmanLoader color='yellow' size={100} ></PacmanLoader> }   
        
        {!Loading &&    <div className="create-post">

<div className="create-post-box">
      <div className="craete-post-inputs">
       <label htmlFor="">Add post title</label>
       <input type="text"  onChange={(e) => {setpostTitle(e.target.value)}}/>
       <label htmlFor="">Add post content</label>
       <input type="text"  onChange={(e) => {setpostContent(e.target.value)}}/>
       <label htmlFor="">Add post image</label>
       <input type="file" onChange={(e) => {setpostImage(e.target.files[0])}} />
       <button onClick={createpost}>Create post</button>
      </div>
</div>

</div> }
     
    </div>
  )
}

export default Createpost

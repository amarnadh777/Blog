import React, { useState } from 'react'
import "./Createpost.css"
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import LoadingScreen from 'react-loading-screen';
import { PacmanLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
function Createpost() {
  const [postTitle,setpostTitle] = useState('')
  const [postContent,setpostContent] = useState('')
  const [postImage,setpostImage] = useState()
  const [Loading,setLoading] = useState(false)
  const [category,setCategory] = useState('')

  const navigate = useNavigate()
  const formdata = new FormData()
formdata.append("postTitle",postTitle)
formdata.append("postcontent",postContent)
formdata.append("image",postImage)
formdata.append("category",category)
const authorInfo= JSON.parse(localStorage.getItem("authorInfo"))
console.log("useri nfoofds",authorInfo.authorId)
formdata.append("authorId",authorInfo.authorId)


  const createpost = async() =>
    {
      setLoading(true)
      const response =await axios.post("https://test-ndv4.onrender.com/api/post/createpost",formdata)
    
      
      if(response.status == 200)
      {
         
         
         setLoading(false)
         navigate(`/postdetails/${response.data.postId}`)
      }
    }
  return (
   
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>

     {Loading && <><PacmanLoader></PacmanLoader></> }   
        
        {!Loading &&    <div className="create-post">

<div className="create-post-box">
      <div className="craete-post-inputs">
       <label htmlFor="">Add post title</label>
       <input type="text"  onChange={(e) => {setpostTitle(e.target.value)}}/>
       <label htmlFor="">Add post category</label>
       <select className='selection' name="" id="" onChange={(e) => {setCategory(e.target.value)}}>
        <option value="Science">Science</option>
        <option value="Health">Health</option>
        <option value="Politics">Politcs</option>


       </select>
    
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

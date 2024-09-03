import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import DarkmodeContext from '../../Utils/Mycontext'

function Editmypost() { 
    const params = useParams()
    const navigate = useNavigate()
    const store =  useContext(DarkmodeContext)
    const [postInfo,setPostInfo] = useState({})
    // useEffect(() =>
    // { 
    
    //  const fet = async() => 
    //     {
    //       const response = await axios.get(`http://localhost:8000/api/post//getpostbyid/${params.postId}`)
          
    //        setPostInfo(response.data.data)
          
    //     }  
    //     fet()   

    // },[])
    // const handleChange = (e) => {
    //   setPostInfo({ ...postInfo, [e.target.postId]: e.target.value });
    // };
    const editpost = async() =>
    {
        try {  
            const data = {postTitle:"postTitle",postId:params.postId}
        
          const response =  await axios.put(`http://192.168.1.3:8000/api/post/editpostbyid`,data)
         if(response.status == 200 )
         {
            navigate(`/mypost/${store.authorDetails.authorId}`)

            
         }
          
        } catch (error) {
            
        }
    }
  return (
    <div>
      <input type="text" value={postInfo.postTitle} />
      <input type="text" value={postInfo.postId} />

      {/* <input type="text" placeholder='edit titel' onChange={(e) => { setPosttile(e.target.value) }} />
      <input type="text" placeholder='edit post content' onChange={(e) => { setPosttile(e.target.value) }} />
      <input type="file" placeholder='edit post image' onChange={(e) => { setPosttile(e.target.value) }} />
 */}

      <button onClick={editpost}> edit</button>
    </div>
  )
}

export default Editmypost

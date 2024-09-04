import React, { useEffect ,useState} from "react";

import "./Postdetailed.css";


import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";

import Loading from "../../Components/Loading/Loading";
import Comments from "../../Components/Comments/Comments";
import Sidebar from "../../Components/Sidebar/Sidebar";
function Postdetailed() {
  const {postId} = useParams()
  const [post, setpost] = useState('')
  const [error,seterror] = useState("")
  const [loading,setloading] = useState(false)

  useEffect(() => {
    
    
  
    const getPostDetails =  async() => {
      try {
        setloading(true)

        const response = await axios.get(`https://test-ndv4.onrender.com/api/post/getpostbyid/${postId}`)

        console.log("🎵🎶🎵🎶🎵🎶",response)
        if(response.status == 200)
        {
          setloading(false)
        }
        setpost(response.data.data)
      } catch (error) {
        setloading(false)
        console.log(error)
        
      }
     

    }
    getPostDetails()
  }, [])
  
  
  return (
    <div>
      
      <Navbar></Navbar>
      <Sidebar></Sidebar>
     {loading && <><Loading></Loading></>}
   {!loading && <>   <div className="d-details">
        <div className="deatils-first">
          <div className="d-category">{post.category}</div>
          <div className="d-postitle">
            <h1>
              {post.postTitle}
            </h1>
          </div>
          <div className="d-postinfo">
            <div className="d-authorimg">
              <img src={post.authorProfileurl} alt="" />
            </div>
            <div className="d-authorname">{post.authorname}</div>
            <div className="d-postdate">{post.createdat}</div>
          </div>
        </div>
        <div className="d-postimg">
          <img src={post.postimgurl} alt="" />
        </div>
        <div className="d-postcontent">
          <p>
            {
              post.postcontent
            }

          </p>
        
        </div>
      </div> 
      
<Comments></Comments>
   
      </> 
}   


    </div>
  );
}

export default Postdetailed;

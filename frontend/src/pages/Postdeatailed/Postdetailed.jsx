import React, { useEffect ,useState} from "react";

import "./Postdetailed.css";
import profiepic from "./p.png";
import postimg from "./Rectangle 39.png";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
function Postdetailed() {
  const {postId} = useParams()
  const [post, setpost] = useState('')
  useEffect(() => {
    
    
  
    return async() => {
      try {
        const response = await axios.get(`https://test-ndv4.onrender.com/api/post/getpostbyid/${postId}`)
        setpost(response.data.data)
      } catch (error) {
        console.log(error)
        
      }
     

    }
  }, [])
  
  
  return (
    <div>
      <Navbar></Navbar>
     
      <div className="d-details">
        <div className="deatils-first">
          <div className="d-category">{post.category}</div>
          <div className="d-postitle">
            <h1>
              {post.postTitle}
            </h1>
          </div>
          <div className="d-postinfo">
            <div className="d-authorimg">
              <img src={profiepic} alt="" />
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
    </div>
  );
}

export default Postdetailed;

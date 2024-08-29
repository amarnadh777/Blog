import React, { Profiler, useContext, useEffect, useState } from "react";

import "./Postes.css";
import img from "./Rectangle 38.png"
import p from "./p.png"
import { Link } from "react-router-dom";
import DarkmodeContext from "../../Utils/Mycontext";
import axios from "axios";
import Mypostes from "../../pages/Mypostes/Mypostes";
function Postes({data}) {
  const {darkmode,setdarkmode} = useContext(DarkmodeContext)
  const [ismypost,setismypost] = useState(false)
  const authorInfo = localStorage.getItem("authorInfo")
  // const {authorId} = JSON.parse(authorInfo)

  // const deletePost = async(e) =>
  // {
//  /   try {
//       // const response = axios.get(`http://localhost:8000/api/post/deletepostbyid/${postid}`)
//        console.log("post deleted",e.target.value);
         
//     } catch (error) {
      
//     }
//   }
  
  
  
  return (
    <div className="postes">
      <h5>Latest Post</h5>
      <div className="postes-grid">
      
       
        {data.map((e) =>{
       
      
         return(
        
<Link to={`/postdetails/${e.postId}`} className="Link">   
          <div className={darkmode ?  `postcard` :  `darmode-postcard`}>
          <div className="postcard-img">
            <img src={e.postimgurl} alt="" />
          </div>
          <div className="post-category">{e.category}</div>
          <div className={ darkmode ? `post-text` : `darkmode-post-text`}>
            <p>
              {e.postTitle}
            </p>
          </div>
          <div className="post-about">
            <div className="post-authorimg">
             { !e.authorProfileurl&& <img src={p} alt="" /> }{ e.authorProfileurl&& <img src={e.authorProfileurl} alt="" />  }
            </div>
            <div className={ darkmode ?  ` post-authorname` : `darkmode-post-authorname`}>{e.authorname}</div>
            <div className ={ darkmode ?  ` post-date` : `darkmode-post-date`}>August 20, 2022 </div>
             {ismypost && <><button>Delet post</button></>}
        
      
          </div>
          
        </div>
        </Link>

         )

   
        })}
       
      </div>
    </div>
  );
}

export default Postes;

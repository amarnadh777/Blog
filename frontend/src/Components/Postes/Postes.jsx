import React, { Profiler, useContext } from "react";
import "./Postes.css";
import img from "./Rectangle 38.png"
import p from "./p.png"
import { Link } from "react-router-dom";
import DarkmodeContext from "../../Utils/Mycontext";
function Postes({data}) {
  const {darkmode,setdarkmode} = useContext(DarkmodeContext)
  return (
    <div className="postes">
      <h5>Latest Post</h5>
      <div className="postes-grid">
        <Link  to="/postdetails" className="Link">
        <div className={darkmode ?  `postcard` :  `darmode-postcard`}>
          <div className="postcard-img">
            <img src={img} alt="" />
          </div>
          <div className="post-category">Technology</div>
          <div className="post-text">
            <p>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </div>
          <div className="post-about">
            <div className="post-authorimg">
              <img src={p} alt="" />
            </div>
            <div className="post-authorname">Tracey Wilson</div>
            <div className="post-date">August 20, 2022</div>
          </div>
          
        </div>
        </Link>
        
       
        {data.map((e) =>{
         return(
<Link to={`postdetails/${e.postId}`} className="Link">   
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
            <div className ={ darkmode ?  ` post-date` : `darkmode-post-date`}>August 20, 2022</div>
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

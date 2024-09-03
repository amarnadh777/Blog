import React, { Profiler, useContext, useEffect, useState } from "react";

import "./Postes.css";
import img from "./Rectangle 38.png";
import p from "./p.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DarkmodeContext from "../../Utils/Mycontext";
import axios from "axios";
import Mypostes from "../../pages/Mypostes/Mypostes";
import { parse } from "@fortawesome/fontawesome-svg-core";
function Postes({ data }) {
  const { darkmode, setdarkmode } = useContext(DarkmodeContext);
  const [ismypost, setismypost] = useState(false);
  const authorInfo = localStorage.getItem("authorInfo");
  const location = useLocation();
  const navigate = useNavigate();
  const deletepost = async (e) => {
    try {
      const response = await axios.get(

        `https://test-ndv4.onrender.com/api/post//deletepostbyid/${e.target.value}`
      );
      window.location.reload();
    } catch (error) {}
  };
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
        {data.length == 0 && (
          <>
            {" "}
            <h3> no post found </h3>{" "}
          </>
        )}
        {data.map((e) => {
          const date = new Date(1666632563517);
          const createdat =
            date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
          return (
                    <>
            <div className={darkmode ? `postcard` : `darmode-postcard`}>
              <Link to={`/postdetails/${e.postId}`} className="Link">
                <div className="postcard-img">
                  <img src={e.postimgurl} alt="" />
                </div>
                <div className="post-category">{e.category}</div>
                <div className={darkmode ? `post-text` : `darkmode-post-text`}>
                  <p>{e.postTitle}</p>
                </div>
                <div className="post-about">
                  <div className="post-authorimg">
                    {!e.authorProfileurl && <img src={p} alt="" />}
                    {e.authorProfileurl && (
                      <img src={e.authorProfileurl} alt="" />
                    )}
                  </div>
                  <div
                    className={
                      darkmode ? ` post-authorname` : `darkmode-post-authorname`
                    }
                  >
                    {e.authorname}
                  </div>
                  <div
                    className={darkmode ? ` post-date` : `darkmode-post-date`}
                  >
                    {createdat}
                  </div>
                </div>
              </Link>
              {location.pathname == `/mypost/${e.authorId}` && (
                <div className="p-btn">
                  <button className="delete-post-btn"  value={e.postId} onClick={deletepost}>
                    Delet post
                  </button>{" "}
                  <Link to={`/editmypost/${e.postId}`}>
                    {" "}
                    <button className="edit-post-btn">edit </button>{" "}
                  </Link>{" "}
                </div>
              )}
            </div>
         
            
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Postes;

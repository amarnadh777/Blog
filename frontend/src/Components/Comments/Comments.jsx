import React, { useContext, useState, useEffect } from "react";
import "./Comments.css";
import DarkmodeContext from "../../Utils/Mycontext";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
function Comments() {
  const params = useParams();
  const [comment, setcomment] = useState([]);

  const [commentText, setcommentText] = useState("");
  const auhtorInfo = JSON.parse(localStorage.getItem("authorInfo"));
  const navigate = useNavigate();

  useEffect(() => {
    const getpostcomment =  async () => {
      const response = await axios.get(
        `https://test-ndv4.onrender.com/api/post/getpostcomment/${params.postId}`
      );
      setcomment(response.data.data);
    };
    getpostcomment()
    
  }, []);
  const addcomment = async () => {
    const data = {
      postId: params.postId,
      authorId: auhtorInfo.authorId,
      commentText: commentText,
    };
    const response = await axios.post(
      "https://test-ndv4.onrender.com/api/post/addcomment",
      data
    );
    if (response.data) {
       window.location.reload()
    }
  };

  const context = useContext(DarkmodeContext);
  return (
    <div>
      <div className="comment">
        {console.log("🤘🤘🎻📻🎶🎙🎧🎹🎷🎹", comment)}
        {!context.userLogined && <h3>Login to write comment</h3>}
        <h4>Comments {`(${comment.length})`} </h4>

        {context.userLogined && (
          <>
            <div className="creat-comment">
              <div className="comment-profile">
                <img src={context.authorDetails.profileurl} alt="" />{" "}
              </div>
              <div className="comment-input">
                <input
                  type="text"
                  placeholder="write your comment about this post"
                  onChange={(e) => {
                    setcommentText(e.target.value);
                  }}
                />{" "}
              </div>
            </div>
            <button onClick={addcomment}>Submit</button>
          </>
        )}

        <div className="commentes">
          {comment.map((e) => {
            return (
              <>
                <div className="comment-bar">
                  <div className="comment-bar-details">
                    <div className="commeter-details">
                      <div className="commenter-profile">
                        <img src={e.postedBy.profileurl} alt="" />
                      </div>
                      <h5>{e.postedBy.authorname}</h5> <h6>sep 23 </h6>
                    </div>
                    <div className="comment-text">
                      <h4>{e.commentBody}</h4>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comments;

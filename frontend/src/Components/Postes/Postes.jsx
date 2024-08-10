import React from "react";
import "./Postes.css";
import img from "./Rectangle 38.png"
import p from "./p.png"
function Postes() {
  return (
    <div className="postes">
      <h5>Latest Post</h5>
      <div className="postes-grid">
        <div className="postcard">
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
        <div className="postcard">
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
        <div className="postcard">
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
        <div className="postcard">
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
        <div className="postcard">
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
      </div>
    </div>
  );
}

export default Postes;

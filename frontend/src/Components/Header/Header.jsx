import React from "react";
import content from "./content.png";
import profile from "./profile.png";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="h-img">
        <img src={content} alt="" />
      </div>
      <div className="h-infocard">
        <div className="h-info">
          <div className="h-category"> Technology</div>
          <div className="h-infotext">
            <h3>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h3>
          </div>
          <div className="h-about">
            <div className="h-profieimg">
              <img src={profile} alt="" />
            </div>
            <div className="h-authorname">Jason Francisco</div>
            <div className="h-createdat"> August 20, 2022 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

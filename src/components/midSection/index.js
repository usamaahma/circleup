import React from "react";
import { Input } from "antd";
import "./style.css";
function MidSection() {
  return (
    <div className="main-mid">
      <div>
        <div className="flex-mid">
          <div>
            <img
              className="img-cir-mid"
              src="https://htmldemo.net/adda/adda/assets/images/profile/profile-small-37.jpg"
              alt=""
            />
          </div>
          <div>
            <Input className="input-mid" placeholder="Say Something" />
          </div>
          <button className="btn-mid-share">Share</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MidSection;

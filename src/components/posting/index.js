import React from "react";
import "./style.css";
function Posting() {
  return (
    <div className="big-div">
      <div className="flex-row-post">
        <div>
          <img
            className="gol-img"
            src="https://htmldemo.net/adda/adda/assets/images/profile/profile-small-25.jpg"
            alt=""
          />
        </div>
        <div className="margin-left-post">
          <h4 className="erik-text-post">Erik Jhonson</h4>
          <p>35 min ago</p>
        </div>
      </div>
      <p className="font-size-post">
        Many desktop publishing packages and web page editors now use Lorem
        Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy.
      </p>
      <div className="center-post-img">
        <img
          className="size-post"
          src="https://htmldemo.net/adda/adda/assets/images/post/post-2.jpg"
          alt=""
        />
        {/* <div>
          <img
            src="https://htmldemo.net/adda/adda/assets/images/post/post-3.jpg"
            alt=""
          />
          <img
            src="https://htmldemo.net/adda/adda/assets/images/post/post-4.jpg"
            alt=""
          />
          <img
            src="https://htmldemo.net/adda/adda/assets/images/post/post-5.jpg"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}

export default Posting;

import React, { useState } from "react";
import "./style.css";
import {
  Briefcase,
  House,
  GeoAlt,
  Activity,
  HeartFill,
} from "react-bootstrap-icons";
import { Row, Col } from "antd";

const data = [
  {
    text: "Any one can join with us if you want",
    text2: "5 Min Ago",
    image:
      "https://htmldemo.net/adda/adda/assets/images/profile/profile-35x35-9.jpg",
  },
  {
    text: "Any one can join with us if you want",
    text2: "10 Min Ago",
    image:
      "https://htmldemo.net/adda/adda/assets/images/profile/profile-35x35-8.jpg",
  },
  {
    text: "Any one can join with us if you want",
    text2: "18 Min Ago",
    image:
      "https://htmldemo.net/adda/adda/assets/images/profile/profile-35x35-7.jpg",
  },
];
const dataImage = [
  {
    image: "https://htmldemo.net/adda/adda/assets/images/gallery/gallery-1.jpg",
  },
  {
    image: "https://htmldemo.net/adda/adda/assets/images/gallery/gallery-2.jpg",
  },
  {
    image: "https://htmldemo.net/adda/adda/assets/images/gallery/gallery-3.jpg",
  },
  {
    image: "https://htmldemo.net/adda/adda/assets/images/gallery/gallery-4.jpg",
  },
  {
    image: "https://htmldemo.net/adda/adda/assets/images/gallery/gallery-5.jpg",
  },
  {
    image: "https://htmldemo.net/adda/adda/assets/images/gallery/gallery-6.jpg",
  },
  {
    image: "https://htmldemo.net/adda/adda/assets/images/gallery/gallery-7.jpg",
  },
  {
    image: "https://htmldemo.net/adda/adda/assets/images/gallery/gallery-8.jpg",
  },
  {
    image: "https://htmldemo.net/adda/adda/assets/images/gallery/gallery-9.jpg",
  },
];
const dataText = [
  {
    id: 1,
    text: "Travel The World",
    text1: "Adventure",
    image:
      "https://htmldemo.net/adda/adda/assets/images/profile/profile-35x35-1.jpg",
  },
  {
    id: 2,
    text: "Travel The World",
    text1: "Adventure",
    image:
      "https://htmldemo.net/adda/adda/assets/images/profile/profile-35x35-11.jpg",
  },
];
function RightSection() {
  const [heartColors, setHeartColors] = useState({});

  const handleClick = (id) => {
    const newHeartColors = { ...heartColors };
    newHeartColors[id] = !newHeartColors[id];
    setHeartColors(newHeartColors);
  };
  return (
    <div>
      <div className="div-erik">
        <h3 className="er-text">Recent Notifications</h3>
        <div className="div-orange-col"></div>
        {data.map((user) => (
          <div className="flex-div-user">
            <div>
              <img className="img-size-circ" src={user.image} alt="" />
            </div>
            <div className="margin-left-right">
              <h4>{user.text}</h4>
              <p>{user.text2}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="div-erik">
        <h3 className="er-text">Advertizement</h3>
        <div className="div-orange-col"></div>

        <img
          src="https://htmldemo.net/adda/adda/assets/images/banner/advertise.jpg"
          alt=""
        />
      </div>
      <div className="div-erik">
        <h3 className="er-text">Friends Zone</h3>
        <div className="div-orange-col"></div>
        <div>
          {dataText.map((post) => (
            <div className="flex-post-left">
              <div>
                <img className="img-size-circ" src={post.image} alt="" />
              </div>
              <div>
                <h4 className="post-text-left">{post.text}</h4>
                <h5>{post.text1}</h5>
              </div>
              <div>
                <span
                  onClick={() => handleClick(post.id)}
                  style={{ color: heartColors[post.id] ? "red" : "white" }}
                >
                  <HeartFill size={20} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSection;

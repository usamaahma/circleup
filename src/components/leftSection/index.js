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
    text: "Web Developer",
    icon: <Briefcase color="#dc4734" size={20} />,
  },
  {
    text: "Melbourne, Australia",
    icon: <House color="#dc4734" size={20} />,
  },
  {
    text: "Pulshar, Melbourne",
    icon: <GeoAlt color="#dc4734" size={20} />,
  },
  {
    text: "Travel, Swimming",
    icon: <Activity color="#dc4734" size={20} />,
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
function LeftSection() {
  const [heartColors, setHeartColors] = useState({});

  const handleClick = (id) => {
    const newHeartColors = { ...heartColors };
    newHeartColors[id] = !newHeartColors[id];
    setHeartColors(newHeartColors);
  };
  return (
    <div>
      <div className="bg-clr">
        <img
          className="img-size"
          src="https://htmldemo.net/adda/adda/assets/images/profile/profile-1.jpg"
          alt=""
        />
      </div>
      <div className="div-erik">
        <h3 className="er-text">Erik Jhonson</h3>
        <div className="div-orange-col"></div>
        <p className="pra-text">
          I Don’t know how? But i believe
          <br /> that it is possible one day if i<br /> stay with my dream all
          time
        </p>
        {data.map((user) => (
          <div className="flex-div-user">
            <div>{user.icon}</div>
            <div>
              <p className="text-text">{user.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="div-erik">
        <h3 className="er-text">Sweets Memories</h3>
        <div className="div-orange-col"></div>
        <Row justify="center">
          {dataImage.map((img) => (
            <Col lg={8}>
              <img className="mar-to-bot" src={img.image} alt="" />
            </Col>
          ))}
        </Row>
      </div>
      <div className="div-erik">
        <h3 className="er-text">Page You May Like</h3>
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

export default LeftSection;

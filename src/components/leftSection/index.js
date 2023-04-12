import React from "react";
import "./style.css";
import { Briefcase, House, GeoAlt, Activity } from "react-bootstrap-icons";
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
const data1 = [
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
function LeftSection() {
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
        <Row justify="center">
          {data1.map((img) => (
            <Col lg={8}>
              <img className="mar-to-bot" src={img.image} alt="" />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default LeftSection;

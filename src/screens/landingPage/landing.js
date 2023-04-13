import React, { useState } from "react";
import { Button, Col, Row, Modal, Input } from "antd";
import "./landing.css";
import { Card, Avatar } from "antd";
import { Container } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
const { TextArea } = Input;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

const url =
  "https://scontent.flhe7-2.fna.fbcdn.net/v/t39.30808-1/279592431_724794315507780_1129961456721801820_n.jpg?stp=dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SdrS2oyFI_gAX81077k&_nc_oc=AQkeH8H8HOAEJ4uemzUf3OdU_kz1r61ZnCi0NsTVgydP3gDHLGS5OklptAPTadZxzF4&_nc_ht=scontent.flhe7-2.fna&oh=00_AfBeUBtsQbfD1yO2NCMnhhmMJO64j-UO8iODcbhLLTCbFA&oe=643C31F0";

const url1 =
  "https://htmldemo.net/adda/adda/assets/images/profile/profile-35x35-1.jpg";
const url2 =
  "https://htmldemo.net/adda/adda/assets/images/profile/profile-35x35-20.jpg";

function Landing() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="landing">
      <Row justify={"space-evenly"}>
        <Col lg={6} md={24} sm={24}>
          <Container>
            {" "}
            <Card
              className="card-col"
              hoverable
              style={{
                width: 280,
              }}
              cover={
                <img
                  className="img-card"
                  alt="example"
                  src="https://htmldemo.net/adda/adda/assets/images/banner/banner-small.jpg"
                />
              }
            >
              {" "}
              <Avatar className="avatar-col" size={80} src={url} />
              <a className="anch-img-col">Usama Ahmad</a>
              <p className="p-col">
                Any one can join with but Social network us if you want Any one
                can join with us if you want
              </p>
            </Card>
            <div>
              <Card
                className="scnd-card"
                style={{
                  width: 280,
                }}
              >
                <p className="p-scnd-card">Page You May Like</p>
                <div className="div-orange-col"></div>
                <br />
                <div className="avat-p-butt">
                  <Avatar src={url1} />
                  <div>
                    {" "}
                    <p className="anther-txt-col">
                      Travel The World <br />
                      <span
                        style={{
                          fontWeight: "lighter",
                          fontSize: ".7rem",
                          color: "#666666",
                        }}
                      >
                        Adventure
                      </span>
                    </p>{" "}
                  </div>

                  <button className="button" onClick={toggleFavorite}>
                    <FaHeart color={isFavorite ? "red" : "gray"} size={20} />
                  </button>
                </div>
              </Card>
              <Card
                className="scnd-card"
                style={{
                  width: 280,
                }}
              >
                <p className="p-scnd-card">Latest Top News</p>
                <div className="div-orange-col"></div>
                <br />
                <div className="avat-p-butt">
                  <Avatar src={url2} />
                  <p className="anther-txt-col">
                    Any one can join with us
                    <br /> if you want
                    <br />
                    <span style={{ fontWeight: "lighter", color: "#7F6697" }}>
                      2 Min Ago
                    </span>
                  </p>{" "}
                </div>
              </Card>
            </div>
          </Container>
        </Col>
        <Col lg={8} md={24} sm={24}>
          <div>
            <div className="scnd-col-div">
              <div className="scnd-div-snd-div">
                <Avatar
                  size={50}
                  src="https://scontent.flhe7-2.fna.fbcdn.net/v/t39.30808-1/279592431_724794315507780_1129961456721801820_n.jpg?stp=dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SdrS2oyFI_gAX81077k&_nc_oc=AQkeH8H8HOAEJ4uemzUf3OdU_kz1r61ZnCi0NsTVgydP3gDHLGS5OklptAPTadZxzF4&_nc_ht=scontent.flhe7-2.fna&oh=00_AfBeUBtsQbfD1yO2NCMnhhmMJO64j-UO8iODcbhLLTCbFA&oe=643C31F0"
                ></Avatar>
                <Input
                  className="snd-div-input"
                  placeholder="Say Something"
                  onClick={showModal}
                />
                <Button className="button-alag">SHARE</Button>
                <Modal
                  title="Share Your Mood"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <TextArea
                    showCount
                    maxLength={500}
                    style={{
                      height: 120,
                      marginBottom: 24,
                    }}
                    onChange={onChange}
                    placeholder="Say Something"
                  />
                </Modal>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={24} sm={24}>
          <Container>
            <Card
              style={{
                width: 280,
              }}
            >
              <p className="p-scnd-card">Recent Notifications</p>
              <div className="div-orange-col"></div>
              <br />
              <div className="avat-p-butt">
                <Avatar src={url2} />
                <p className="anther-txt-col">
                  Any one can join with us
                  <br /> if you want
                  <br />
                  <span style={{ fontWeight: "lighter", color: "#7F6697" }}>
                    2 Min Ago
                  </span>
                </p>{" "}
              </div>
            </Card>{" "}
            <Card
              className="scnd-card"
              style={{
                width: 280,
              }}
            >
              <p className="p-scnd-card">Friends Zone</p>
              <div className="div-orange-col"></div>
              <br />
              <div className="avat-p-butt">
                <Avatar src="https://htmldemo.net/adda/adda/assets/images/profile/profile-35x35-15.jpg" />
                <div>
                  {" "}
                  <p className="anther-txt-col">
                    Ammeya Jakson <br />
                    <span
                      style={{
                        fontWeight: "lighter",
                        fontSize: ".7rem",
                        color: "#666666",
                      }}
                    >
                      10 Mutual{" "}
                    </span>
                  </p>{" "}
                </div>

                <button className="button" onClick={toggleFavorite}>
                  <FaHeart color={isFavorite ? "red" : "gray"} size={20} />
                </button>
              </div>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Landing;

import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import LeftSection from "../leftSection";
import RightSection from "../rightSection";

function HeroSection() {
  return (
    <div>
      <div className="bg-image"></div>
      <div>
        <Row justify="center">
          <Col lg={6}>
            <div className="center-col-land">
              <LeftSection />
            </div>
          </Col>
          <Col lg={8}>
            <div className="center-col-land"></div>
          </Col>
          <Col lg={6}>
            <div className="center-col-land">
              <RightSection />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HeroSection;

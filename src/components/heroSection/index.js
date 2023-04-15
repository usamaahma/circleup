import React from "react";
import "./style.css";
import { Row, Col, Tabs } from "antd";
import LeftSection from "../leftSection";
import RightSection from "../rightSection";
import MidSection from "../midSection";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

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
            {/* <div className="center-col-land"> */}
            <Tabs defaultActiveKey="1" onChange={callback} centered>
              <TabPane tab="Timeline" key="1">
                <MidSection />
              </TabPane>
              <TabPane tab="About" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Photos" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Friends" key="4">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="More" key="5">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
            {/* </div> */}
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

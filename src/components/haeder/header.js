import React from "react";
import "./header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Avatar } from "antd";

const url =
  "https://htmldemo.net/adda/adda/assets/images/profile/profile-midle-1.jpg";

function Header() {
  return (
    <div>
      <Container>
        <Navbar bg="light" expand="lg" style={{ height: "8rem" }}>
          <Container>
            <Navbar.Brand href="#">
              <img src="favicon.png" alt="abc" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                // navbarScroll
              >
                <Nav.Link href="#action1" className="navbartxt">
                  Home
                </Nav.Link>
                <Nav.Link href="#action2" className="navbartxt">
                  Message
                </Nav.Link>

                <Nav.Link href="#action3" className="navbartxt">
                  Notification
                </Nav.Link>
              </Nav>
              {/* <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav> */}
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Avatar size={50} className="avatar" src={url} />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;

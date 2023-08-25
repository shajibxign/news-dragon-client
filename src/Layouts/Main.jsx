// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import RightNav from "../Pages/Shared/Navs/RightNav";
import LeftNav from "../Pages/Shared/Navs/LeftNav";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Container>
      <Row>
        <Col  lg={3} sm={3}><RightNav></RightNav></Col>
        <Col lg={6} sm={6}>Main Content</Col>
        <Col  lg={3} sm={3}><LeftNav></LeftNav></Col>
      </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Main;

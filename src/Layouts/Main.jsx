// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import RightNav from "../Pages/Shared/Navs/RightNav";
import LeftNav from "../Pages/Shared/Navs/LeftNav";
import CustomNavbar from "../Pages/Shared/CustomNavbar/CustomNavbar";

const Main = () => {
  return (
    <>
      <Header></Header>
      <CustomNavbar></CustomNavbar>
      <Container>
      <Row>
        <Col  lg={3} sm={3}><LeftNav></LeftNav></Col>
        <Col lg={6} sm={6}> <Outlet></Outlet> </Col>
        <Col  lg={3} sm={3}><RightNav></RightNav></Col>
      </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Main;

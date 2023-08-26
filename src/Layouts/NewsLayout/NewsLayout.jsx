import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Pages/Shared/Navs/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../../Pages/Shared/Navs/RightNav';
import Footer from '../../Pages/Shared/Footer/Footer';

const NewsLayout = () => {
    return (
        <>
      <Header></Header>
      <Container>
      <Row>
        <Col lg={9} sm={9}> <Outlet></Outlet> </Col>
        <Col  lg={3} sm={3}><RightNav></RightNav></Col>
      </Row>
      </Container>
      <Footer></Footer>
    </>
    );
};

export default NewsLayout;
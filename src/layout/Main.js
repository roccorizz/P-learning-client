import React from 'react';
import Footer from '../Pages/shared/Footer/Footer';
import Header from '../Pages/shared/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className="mt-5">
                <Row>
                    <Col lg={12}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../image/Notfound.jpeg'

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <img src={image} className="pb-4" alt="" />
                    </Col>
                 </Row>
            </Container>
        </div>
    );
};

export default NotFound;
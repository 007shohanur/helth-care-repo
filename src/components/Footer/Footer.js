import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-info">
            <div className="contanier">
                <Row>
                <Col className="p-4">
                <h1 className=" text-danger">Medical <span className="text-primary">Care</span></h1>
                <p className="text-success">Best Services for Patient</p>
                <h5 className="text-primary">Phone:01785465415</h5>
                <h5 className="text-primary">Email: meidcal@gmail.com</h5>
                </Col>
                <Col className="text-white ">
                    <h1>
                        Follow Us
                    </h1>
                    <Col>Facebook</Col>
                    <Col>Instagram</Col>
                    <Col>Twiter</Col>
                
                </Col>
                </Row>
                <div >
                <h4 className="text-center text-white pb-4">Copy © right 2021</h4>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;
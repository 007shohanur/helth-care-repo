import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const details = () => {
    return (
        <div className=" container w-25 mt-5 mb-5">
            <Form >
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
      <Form.Control placeholder="Last name" />
      <Form.Control placeholder="Pronlems" />
    </Col>
    
  </Row>
</Form>
<Button className="success" value="submit" > submit</Button>
        </div>
    );
};

export default details;
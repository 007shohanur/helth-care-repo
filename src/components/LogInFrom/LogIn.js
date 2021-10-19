import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LogIn = () => {
    return (
        <div className="container w-25 mt-5 bg-info bg-opacity-10 p-3">
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    LogIn
  </Button>
  <br/><br/> <br/>
  <Button variant="danger" className=" m-2" type="submit" on>
    Google
  </Button>
  <Button variant="danger" className=" m-2"type="submit" onClick="">
  GitHub
  </Button>
</Form>
        </div>
    );
};

export default LogIn;

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
  const {googlelognin} = useAuth();
  const location = useLocation()
  const history = useHistory()
  const redirectPage = location.state?.from || '/';
  const handelGoogleSingIn = (e) =>{ 
    e.preventDefault()
    googlelognin()
    .then(result=>{
      history.push(redirectPage)
    })
    
  }
    return (
        <div className="container w-25 mt-5 bg-info bg-opacity-10 p-3 mb-5">
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
  <button onClick={handelGoogleSingIn} className="btn btn-primary">Google Sign in</button>
  
</Form>
        </div>
    );
};

export default LogIn;
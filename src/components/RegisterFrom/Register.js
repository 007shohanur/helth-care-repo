import { getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import {  Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
  const {googlelognin ,registerUser} = useAuth();
  const [error, setError] = useState("");
  const [errorTxt, setErrorTxt] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
  const location = useLocation()
  const history = useHistory()
  const redirectPage = location.state?.from || '/home';
  const handelGoogleSingIn = (e) =>{ 
    e.preventDefault()
    googlelognin()
    .then(result=>{
      history.push(redirectPage)
    })
    
  }

   const auth = getAuth()

    const getUserEmail = (e) =>{
        setEmail(e.target.value)
    }
    const getUserPassword = (e) =>{
        setPassword(e.target.value)
    }
    const getUserName = (e)=>{
        setName(e.target.value)
    }
    const handleRegister = (e) =>{
         e.preventDefault()
         if(password.length < 6){
            setErrorTxt("password must be at least six character")
            setError("")
         }else{
            setErrorTxt("")
         }
         registerUser(email,password,name)
         .then(result => {
            history.push(redirectPage)
                window.location.reload(); 
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
            })
          .catch(error =>{
            setError("Email already taken")
          })
    }
  

    return (
        <div className="container w-25 mt-5 bg-info bg-opacity-10 p-3 mb-5">
            <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicUserName">
    <Form.Label>User Name</Form.Label>
    <Form.Control onBlur={getUserName} type="text" placeholder="user name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={getUserEmail} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={getUserPassword} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <p className="text-danger">{error}</p>
  <p className="text-danger">{errorTxt}</p>
  <Button variant="primary" type="submit">
  Sign Up
  </Button>
  <br /> <br />
  <button onClick={handelGoogleSingIn} className="btn btn-primary"> Sign Up With Google</button>
</Form>

  
        </div>
    );
};

export default Register;
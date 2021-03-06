import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className=" bg-dark bg-opacity-25">
          <div>
              
          <ul className="d-flex justify-content-between pt-3 pb-3">

          <img src={image} className="logo rounded-circle justify-content-start" alt="" /> 
          
           <div className=" justify-content-end ms-5 pt-2 ">

           <Link className="text-decoration-none text-white p-3" to="/">Home</Link>
          
          <Link className="text-decoration-none text-white p-3" to="/doctors">Doctors</Link>

           <Link className="text-decoration-none text-white p-3" to="/contactUs">ContactUs</Link>

          <Link className="text-decoration-none mx-2 rounded-3 bg-danger text-white p-3" to="/register">Register</Link>

          <Link className="text-decoration-none mx-3 bg-success rounded-3 text-white p-3" to="/login">LogIn</Link>
        
           </div>
          
        </ul>
    
          </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer p-4'>
      <div className='container'>
      <div className='row'>
        <div className='col'>
          <h4>Help Center</h4>
          <li>FAQS</li>
          <li>Term and Conditions</li>
          <li>Privacy</li>
          <li>Track orders</li>
        </div>
        <div className='col'>
          <h4>Quick Link</h4>
          <Link className='text-decoration-none text-dark' to='/home'>About</Link><br />
          <Link className='text-decoration-none text-dark' to='/Contract'>Contart</Link><br />
          <Link className='text-decoration-none text-dark' to='/Appointment'>Appointments</Link><br />
          <Link className='text-decoration-none text-dark' to='/Blog'>Blog</Link>
        </div>
        <div className='col'>
          <h4>Newsletter</h4>
          <p>Subscribes and get discount</p>
          <div class="input-group mb-3 w-75">
             <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Recipient'susername" aria-describedby="button-addon2"/>
             <button class="btn btn-outline-success" type="button"id="button-addon2">Submit</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
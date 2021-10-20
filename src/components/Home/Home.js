
import React from 'react';
import image from '../../image/Slider/slider 1.jpg';
import image2 from '../../image/Slider/slider2.jpg';
import image3 from '../../image/Slider/slider3.jpeg';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import AboutUs from '../Aboutus/AboutUs';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div className="container mt-5 mb-5 bg-info  bg-opacity-10">
            <Carousel fade>
  <Carousel.Item>
    <img className="d-block w-100"
      src={image} alt="First slide" />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2} alt="Second slide"/>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3} alt="Third slide" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  <Services></Services>
  <AboutUs></AboutUs>
  <Blog></Blog>
        </div>
        
        
    );
};

export default Home;
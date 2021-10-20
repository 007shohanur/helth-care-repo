
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
    <img className="d-block rounded-3 w-100"
      src={image} alt="First slide" />
    <Carousel.Caption>
      <h3>Opration Theatar</h3>
      <p>High lavle opration theatar. We provied best our services</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block rounded-3 w-100"
      src={image2} alt="Second slide"/>
    <Carousel.Caption>
      <h3>I C U</h3>
      <p>High lavel I C U.We provied best our services</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block rounded-3 w-100"
      src={image3} alt="Third slide" />
    <Carousel.Caption>
      <h3>Genarel Cabine</h3>
      <p>High lavel Genarel Cabine .We provied best our services.</p>
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
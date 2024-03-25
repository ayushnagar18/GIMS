import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../styles/PA.css';

import waterjetpic from '../assets/products/waterjetpic.jpg';
import waterjetpic2 from '../assets/products/waterjetpic2.jpg'


function PA() {



  return (
    

    <div id="carouselExampleCaptions" className="carousel slide carousel-fade  "  >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img src={waterjetpic} className="d-block w-100 c-img" alt="" />
          <div className="carousel-caption ">
            <h1 className=" display-4  text-uppercase" style={{fontWeight:'500'}}>WaterJet Machine</h1>
            
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src={waterjetpic2} className="d-block w-100 c-img" alt="" />
          <div className="carousel-caption ">
            <h1 className=" display-4  text-uppercase" style={{fontWeight:'500'}}>Lathe Machine</h1>
            
          </div>
        </div>
        <div className="carousel-item c-item">
          <img src={waterjetpic} className="d-block w-100 c-img" alt="" />
          <div className="carousel-caption ">
            <h1 className=" display-4  text-uppercase" style={{fontWeight:'500'}}>3D printer</h1>
            
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>



  );
}

export default PA;
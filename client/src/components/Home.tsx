import React, { Fragment } from "react";
import latesttech from "../assets/Home/latest-tech.svg";
import protection from "../assets/Home/protection.svg";
import manufacturing from "../assets/Home/manufacturing.svg";
import global from "../assets/Home/global-scalability.svg";
import "../styles/Home.css";
import { FaArrowRight, FaCircle, FaCheckCircle } from "react-icons/fa";
import NavBar from "./NavBar";
import ozcare from "../assets/Home/oz-care.png";
import desktop from "../assets/Home/desktop-3d.png";
import apple from "../assets/Home/apple.jpg";
import Footer from "./Footer";
import { Product } from "../utils";
import Gallery from "./Gallery";
import axios from "axios";
import ReactPlayer from "react-player";
import patent from '../assets/Home/png-clipart-patent-logo-bicycle-invention-bicycle-text-bicycle-thumbnail-removebg-preview.png';
import EditTeam from "./EditTeam";
import EditProduct from "./EditProduct";
import DisplayTimesheet from "./DisplayTimesheet";
import Imageupload from "./Imageupload";


const Home = () => {
  const [data, setData] = React.useState<Product[]>([]);

  React.useEffect(() => {
    // var axios = require("axios");
    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/product",
    };

    axios(config)
      .then(function (response: any) {
        let fltrdata = response.data.filter((product: any) => {
          return product.presentinhomepage;
        });

        setData(fltrdata);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <div className="fade-nav">
        <NavBar />

      </div>
      <section className="banner-sec">
        <div className="container ">
          <div className="row align-items-center ">
            <div className=" col-xl-6 col-lg-12 col-md-12 col-12 text-light" >
              <h1 className="txt-1 fade-in">
                Guhan Industrial and <br />
                Manufacturing Solutions

              </h1>
              
              <h4 className="align-items-center fade-in">
                <i className="fw ">
                  <blockquote>Engineered by the laws of Physics. </blockquote>
                </i>
              </h4>
              <div className="banner-links py-3 fade-in" >
                <a href="/products">
                  <button type="button" className="btn1 btn-primary" >
                    Explore Products <FaArrowRight />
                  </button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Ends -->

        <!-- Product sec --> */}


      <section className="product-sec pt-5 pb-2">
        <div className="container">
          <div className="">
            <div className="col-12 pb-5">
              <h2 className="txt" style={{ color: 'black' }}>Why Choose Us?</h2>
              <h6 className="txt-2">
                Our products instantly attracts customers for success
              </h6>
              
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 home-box" >

              
              <div className="productBox col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                <img src={latesttech} loading="lazy" />
                <p className="body-semi pt-4 pb-2" >Latest Tech</p>
                <p className="body-sm" >
                  GIMS Develops latest and advanced technology
                </p>
              </div>
              <div className="productBox col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                <img src={protection} loading="lazy" />
                <p className="body-semi pt-4 pb-2" >Protection</p>
                <p className="body-sm" >
                  GIMS Secures Strong design and patent protection
                </p>
              </div>
              <div className="productBox col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                <img src={manufacturing} loading="lazy" />
                <p className="body-semi pt-4 pb-2" >Manufacturing</p>
                <p className="body-sm" >
                  GIMS Products can be manufactured in a wide range of markets
                  at competitive Prices
                </p>
              </div>
              <div className="productBox col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                <img src={global} loading="lazy" />
                <p className="body-semi pt-4 pb-2">Global Scalability</p>
                <p className="body-sm" >
                  GIMS helps companies to scale up globally by taking the risk
                  out of designing and R&D
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Video Section*/}

      <section className="video-sec " id="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-4">
              <h2 className="txt" style={{ color: 'white', marginTop: '40px', marginBottom: '10px' }}>That's How We Do It..</h2>
              

            </div>
            < div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <div className="video" style={{   }}>
                <iframe
                  width="100%"
                  height="300px"
                  src="https://www.youtube.com/embed/SerLEXm7Z84"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </div>

            <div className="col-xl-6 col-lg-12 col-md-12 col-12 text-center">
              <div className="row align-items-center">
                <div className="productBox  col-12 pb-5">
                  <FaCircle style={{ fontSize: '10px' }} />
                  <p className="body-sm" style={{ color: 'white' }}>
                     Explore the intricate mechanisms of industrial machines, delving deep into the precise workings of a water jet system. Witness the sheer power and efficiency as these marvels of engineering effortlessly slice through materials with unparalleled precision. Embark on a journey through the heart of innovation, where technology meets craftsmanship in the realm of industrial machinery.
                  </p>
                </div>

                

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Patents and R&D section */}

      <section className="product-sec pt-1 pb-2">
        <div className="container">
          <div className="row" style={{ marginTop: '0' }} >
            <div className="col-12 pb-4">
              <h2 className="txt" style={{ color: 'black' }}>Patents and R&D</h2>
              
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">

              <div className="row align-items-center">
                <div className=" col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                  <FaCheckCircle style={{ color: 'green', fontSize: '25px' }} />
                  <p className="body-sm">
                    GIMS Develops latest and advanced technology
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                  <FaCheckCircle style={{ color: 'green', fontSize: '25px' }} />
                  <p className="body-sm">
                    GIMS Secures Strong design and patent protection
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                  <FaCheckCircle style={{ color: 'green', fontSize: '25px' }} />
                  <p className="body-sm">
                    GIMS Products can be manufactured in a wide range of markets
                    at competitive Prices
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 pb-5">
                  <FaCheckCircle style={{ color: 'green', fontSize: '25px' }} />
                  <p className="body-sm">
                    GIMS helps companies to scale up globally by taking the risk
                    out of designing and R&D
                  </p>
                </div>

              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 text-center">
              <section className="image-page4">
                <img src={patent} alt="" />
                
              </section>
              
            </div>
          </div>
        </div>
      </section>


      {/* Industry section */}

      <section className="industry-sec pt-5" id="banner">
        <div className="container">
          <div className="row">
            <div className="" >
              <h2 className="txt" style={{ color: 'white' }}>
                Our Industrial and
                <br />
                Manufacturing solutions
              </h2>
              
              {data
                .filter((_, ind) => {
                  return ind % 2 === 0;
                })
                .map((product) => {
                  return (
                    <div className="card mt-5 cardBox" style={{ padding: "10px", border: 'none', borderRadius: '0', background: 'transparent' }}>
                      <div style={{ flex: '40%' }}>
                        <img
                          className="card-img-top"
                          src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                        />

                      </div>
                      <div className="card-body" style={{ flex: '60%', padding: "50px" }}>
                        
                        <p className="txt-3-bold" style={{color:'white'}}>{product.name}</p>
                        <p className="body-bold py-2" style={{color:'#afa6a6'}}>
                          {product.description.split("###")[0]}
                          
                        </p>
                        <div className="banner-links">
                          <a
                            href="https://gimsindia.in/products"
                            className="btn-style-2"
                          >
                            Learn More{" "}
                            <FaArrowRight className="text-primary mx-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                   ); 
                 })} 
            </div>
            <div className=" col-12 negative-card">
              {data
                .filter((_, ind) => {
                  return ind % 2 != 0;
                })
                .map((product) => {
                  return (
                    <div className="card mt-5 cardBox" style={{ padding: "10px", border: 'none', borderRadius: '0', background: 'transparent' }}>
                      <div style={{flex:'40%'}}>
                        <img
                          className="card-img-top"
                          src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                        />

                      </div>
                      <div className="card-body" style={{ flex: '60%', padding: "50px" }}>
                        <p className="txt-3-bold" style={{color:'white'}}>{product.name}</p>
                        
                        <p className="body-bold py-2" style={{color:'#afa6a6'}}>
                          {product.description.split("###")[0]}
                          
                        </p>
                        <div className="banner-links">
                          <a
                            href="https://gimsindia.in/products"
                            className="btn-style-2"
                          >
                            Learn More{" "}
                            <FaArrowRight className="text-primary mx-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                   ); 
                 })} 
              <div className="banner-links py-3">
                <a href="/products">
                  <button type="button" className="btn2 btn-primary" >
                    Explore All Products <FaArrowRight className="ms-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <Footer />
    </Fragment>
  );
};

export default Home;

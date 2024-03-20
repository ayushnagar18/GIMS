import React, { Fragment } from "react";
import "../styles/Products.css";
import NavBar from "./NavBar";
import PA from "./PA";
import { FaArrowRight } from "react-icons/fa";
import ozcare from "../assets/Home/oz-care.png";
import desktop from "../assets/Home/desktop-3d.png";
import nextbreakout from "../assets/Home/next-breakout.png";
import Footer from "./Footer";
import { Product } from "../utils";
import axios from "axios";
import { url } from "inspector";
import ProductPage from "./ProductPage";





const Products = () => {
  const [data, setData] = React.useState([]);

  const images = [
    require('../assets/Home/vintage-pink-telephone-composition_23-2148913955.jpg'),
    require('../assets/Home/patentimg.jpg'),
    require('../assets/Careers/chennaitree.jpg'),
    require('../assets/Careers/chennaitree.jpg'),
    require('../assets/Careers/chennaitree.jpg'),
    require('../assets/Careers/chennaitree.jpg'),



  ];

  React.useEffect(() => {
    // var axios = require("axios");
    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/product",
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  const pe = data.filter((product: Product) => {
    if (product.type === "Product Engineering") {
      return true;
    }
    return false;
  });

  const pd = data.filter((product: Product) => {
    if (product.type === "Product Design") {
      return true;
    }
    return false;
  });

  const inv = data.filter((product: Product) => {
    if (product.type === "Innovations") {
      return true;
    }
    return false;
  });

  const manufact = data.filter((product: Product) => {
    if (product.type === "Manufacturing Solutions") {
      return true;
    }
    return false;
  });

  return (
    <Fragment>
      <NavBar />
      {/* <ProductPage /> */}
      <section className="PA-class" style={{height:'100vh',backgroundColor:'#F8F6F4'}}>
        <PA />
      </section>
      
      <section className="bannerprod-sec" style={{ background: '#F8F6F4' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt pb-5  " style={{ fontFamily: 'poppins', color: 'black' }}>
                Reimagining
                <br />
                Advanced Innovations
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="tab-sec pb-5 pt-4 prod-sec" style={{ background: '#F8F6F4' }}>
        <div className="row">
          <div className="row align-items-center">
            {/* <!-- Nav Tabs --> */}
            <div className="tab-main">
              <div className="wrap-tab">
                <nav>
                  <div
                    className="nav nav-tabs nav-justified px-5" id="nav-tab" role="tablist">

                    <button className="nav-link active" id="nav-menu1-tab" data-bs-toggle="tab" data-bs-target="#nav-menu1" type="button" role="tab" aria-controls="nav-menu1" aria-selected="true">
                      <p className="body-sm" style={{ fontFamily: 'roboto' }}>Product Engineering</p>
                    </button>

                    <button className="nav-link" id="nav-menu2-tab" data-bs-toggle="tab" data-bs-target="#nav-menu2" type="button" role="tab" aria-controls="nav-menu2" aria-selected="false">
                      <p className="body-sm" style={{ fontFamily: 'roboto' }}>Product Design</p>
                    </button>

                    <button className="nav-link" id="nav-menu3-tab" data-bs-toggle="tab" data-bs-target="#nav-menu3" type="button" role="tab" aria-controls="nav-menu3" aria-selected="false">
                      <p className="body-sm" style={{ fontFamily: 'roboto' }}>Innovations</p>
                    </button>

                    <button className="nav-link" id="nav-menu4-tab" data-bs-toggle="tab" data-bs-target="#nav-menu4" type="button" role="tab" aria-controls="nav-menu4" aria-selected="false">
                      <p className="body-sm" style={{ fontFamily: 'roboto' }}>Manufacturing Solutions</p>
                    </button>

                  </div>
                </nav>
              </div>
            </div>









            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active product-row"
                id="nav-menu1"
                role="tabpanel"
                aria-labelledby="nav-menu1-tab"
                tabIndex={0}
              >
                <div className="container">
                  <div className="row justify-content-center pb-5">



                    <div className="">
                      {pe
                        .filter((_, ind) => {
                          if (ind % 2 == 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            
                            <div className="card mt-3 cardBox" style={{ padding: "10px", border: 'none', borderRadius: '0', background: '#E8EAE6' }} key={product.id}>
                              <div style={{ flex: '40%' }}>
                                <img
                                  className="card-img-top"
                                  
                                  src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                                />
                              </div>
                              <div className="card-body" style={{ flex: '60%', padding: "50px" }}>
                                <p className="txt-3-bold" style={{ fontFamily: 'Arial', color: '#222831' }}>{product.name}</p>
                                
                                <p className="body-bold py-2 product-descrip" style={{ textAlign: 'justify', fontFamily: 'system-ui', fontWeight: '100' }}>
                                   
                                  {product.description.split("###")[0]}
                                </p>
                                <div className="banner-links">
                                  
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>




                    <div className=" col-12 pb-5 negative-sec">
                      {pe
                        .filter((_, ind) => {
                          if (ind % 2 != 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            
                            <div className="card mt-5 cardBox" style={{ padding: "10px", border: 'none', borderRadius: '0', background: '#E8EAE6' }} key={product.id}>
                              <div style={{ flex: '40%' }}>
                                <img
                                  className="card-img-top"
                                  
                                  src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                                />

                              </div>
                              <div className="card-body" style={{ flex: '60%', padding: "50px" }}>
                                
                                <p className="txt-3-bold" style={{ fontFamily: 'Arial' }}>{product.name}</p>
                                <p className="body-bold py-2 product-descrip" style={{ textAlign: 'justify', fontFamily: 'system-ui', fontWeight: '100' }}>
                                  
                                  {product.description.split("###")[0]}
                                </p>
                                <div className="banner-links">
                                  
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>












              <div
                className=" tab-pane fade"
                id="nav-menu2"
                role="tabpanel"
                aria-labelledby="nav-menu2-tab"
                tabIndex={0}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="">
                      {pd
                        .filter((_, ind) => {
                          if (ind % 2 == 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            
                            <div className="card mt-5 cardBox" style={{ padding: "10px", border: 'none', borderRadius: '0', background: '#E8EAE6' }} key={product.id}>
                              <div style={{ flex: '40%' }}>
                                <img
                                  className="card-img-top"
                                 
                                  src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                                />
                              </div>
                              <div className="card-body" style={{ flex: '60%', padding: "50px" }}>
                                
                                <p className="txt-3-bold" style={{ fontFamily: 'Arial' }}>{product.name}</p>
                                <p className="body-bold py-2 product-descrip" style={{ textAlign: 'justify', fontFamily: 'system-ui', fontWeight: '100' }}>
                                     
                                  {product.description.split("###")[0]}
                                </p>
                                <div className="banner-links">
                                  
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className=" col-12 pb-5 negative-sec">
                      {pd
                        .filter((_, ind) => {
                          if (ind % 2 != 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                             
                            <div className="card mt-5 cardBox" style={{ padding: "10px", border: 'none', borderRadius: '0', background: '#E8EAE6' }} >
                              <div style={{ flex: '40%' }}>
                                <img
                                  className="card-img-top"
                                  src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                                  

                                />

                              </div>
                              <div className="card-body" style={{ flex: '60%', padding: "50px" }}>
                                
                                <p className="txt-3-bold" style={{ fontFamily: 'Arial' }}>{product.name}</p>
                                <p className="body-bold py-2 product-descrip" style={{ textAlign: 'justify', fontFamily: 'system-ui', fontWeight: '100' }}>
                                  {product.description.split("###")[0]}
                                  
                                </p>
                                <div className="banner-links">
                                  
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>


              <div
                className=" tab-pane fade"
                id="nav-menu3"
                role="tabpanel"
                aria-labelledby="nav-menu3-tab"
                tabIndex={0}
              >
                <div className="container">

                  <div className="row justify-content-center">
                    <div className="">
                      {inv
                        .filter((_, ind) => {
                          if (ind % 2 == 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5 cardBox" style={{ padding: "10px", border: 'none', borderRadius: '0', background: '#E8EAE6' }}>
                              <div style={{ flex: '40%' }}>
                                <img
                                  className="card-img-top"
                                  src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                                  
                                />

                              </div>
                              <div className="card-body" style={{ flex: '60%', padding: "50px" }}>
                                <p className="txt-3-bold" style={{ fontFamily: 'Arial' }}>{product.name}</p>
                                
                                <p className="body-bold py-2 product-descrip" style={{ textAlign: 'justify', fontFamily: 'system-ui', fontWeight: '100' }}>
                                  {product.description.split("###")[0]}
                                   
                                </p>
                                <div className="banner-links">
                                  
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className=" col-12 pb-5 negative-sec">
                      {inv
                        .filter((_, ind) => {
                          if (ind % 2 != 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5 cardBox" style={{ padding: "10px", border: 'none', borderRadius: '0', background: '#E8EAE6' }}>
                              <div style={{ flex: '40%' }}>
                                <img
                                  className="card-img-top"
                                  src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                                  
                                />

                              </div>
                              <div className="card-body" style={{ flex: '60%', padding: "50px" }}>
                                
                                <p className="txt-3-bold" style={{ fontFamily: 'Arial' }}>{product.name}</p>
                                <p className="body-bold py-2 product-descrip" style={{ textAlign: 'justify', fontFamily: 'system-ui', fontWeight: '100' }}>
                                  {product.description.split("###")[0]}
                                  
                                </p>
                                <div className="banner-links">
                                  
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>


              <div
                className=" tab-pane fade"
                id="nav-menu4"
                role="tabpanel"
                aria-labelledby="nav-menu4-tab"
                tabIndex={0}
              >
                <div className="container">

                  <div className="row justify-content-center">
                    <div className="">
                      {manufact
                        .filter((_, ind) => {
                          if (ind % 2 == 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5 cardBox" style={{ padding: "10px", border: 'none', borderRadius: '0', background: '#E8EAE6' }}>
                              <div style={{ flex: '40%' }}>
                                <img
                                  className="card-img-top"
                                  src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                                  

                                />

                              </div>
                              <div className="card-body" style={{ flex: '60%', padding: "50px" }}>
                                <p className="txt-3-bold" style={{ fontFamily: 'Arial' }}>{product.name}</p>
                                
                                <p className="body-bold py-2 product-descrip" style={{ textAlign: 'justify', fontFamily: 'system-ui', fontWeight: '100' }}>
                                  {product.description.split("###")[0]}
                                   
                                </p>
                                <div className="banner-links">
                                  
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className=" col-12 pb-5 negative-sec">
                      {manufact
                        .filter((_, ind) => {
                          if (ind % 2 != 0) {
                            return true;
                          }
                          return false;
                        })
                        .map((product: Product) => {
                          return (
                            <div className="card mt-5 cardBox" style={{ padding: "10px", border: 'none', borderRadius: '0', background: '#E8EAE6' }}>
                              <div style={{ flex: '40%' }}>
                                <img
                                  className="card-img-top"
                                  src={`${process.env.REACT_APP_BACKEND_URL}/products/${product.image}`}
                                />

                              </div>
                              <div className="card-body" style={{ flex: '60%', padding: "50px" }}>
                                <p className="txt-3-bold" style={{ fontFamily: 'Arial' }}>{product.name}</p>
                                <p className="body-bold py-2 product-descrip" style={{ textAlign: 'justify', fontFamily: 'system-ui', fontWeight: '100' }}>
                                  {product.description.split("###")[0]}
                                </p>
                                <div className="banner-links">
                                  <a href={`/product/${product.id}`} className="btn-style-2">
                                    Learn More <FaArrowRight />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </Fragment>
  );
};

export default Products;
